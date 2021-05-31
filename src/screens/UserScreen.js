import React, {useState, useEffect, useContext} from 'react';
import UserProfile from '../components/UserProfile';
import {AuthContext} from '../firebase/auth';
import firestore from '@react-native-firebase/firestore';


const UserScreen = () => {

  const {user} = useContext(AuthContext);
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(user._user.uid)
      .onSnapshot(documentSnapshot => {
        console.log(documentSnapshot.data());
      });
    return () => subscriber();
  }, [user._user.uid]);

  return <UserProfile userName={userName.name}/>;
};

export default UserScreen;
