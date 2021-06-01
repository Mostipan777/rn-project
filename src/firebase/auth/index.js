import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const correctMessage = message => message.split(' ').slice(1).join(' ');

const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    Alert.alert(e.name, correctMessage(e.message));
  }
};

const createUser = async (email, password, name) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    await firestore().collection('users').doc(auth().currentUser.uid).set({
      name,
    });
  } catch (e) {
    Alert.alert(e.name, correctMessage(e.message));
  }
};

const logout = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    Alert.alert(e.name, correctMessage(e.message));
  }
};

export {login, createUser, logout};
