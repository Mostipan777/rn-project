import React, {useState, useEffect, useContext} from 'react';
import UserProfile from '../components/UserProfile';
import {AuthContext} from '../firebase/auth';
import firestore from '@react-native-firebase/firestore';


const UserScreen = () => {

  const {user} = useContext(AuthContext);
  const [userName, setUserName] = useState('')
  const userId = user._user.uid

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        setUserName(documentSnapshot.data());
      });
    return () => subscriber();
  }, [userId]);

  return <UserProfile userName={userName.name}/>;
};

export default UserScreen;
