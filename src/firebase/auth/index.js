import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            Alert.alert(e.name, e.message.split(' ').slice(1).join(' '));
          }
        },
        createUser: async (email, password, name) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    name,
                  })
                  .catch(e => {
                    Alert.alert(
                      e.name,
                      e.message.split(' ').slice(1).join(' '),
                    );
                  });
              })
              .catch(e => {
                Alert.alert(e.name, e.message.split(' ').slice(1).join(' '));
              });
          } catch (e) {
            Alert.alert(e.name, e.message.split(' ').slice(1).join(' '));
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert(e.name, e.message.split(' ').slice(1).join(' '));
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
