import React, {useState, useEffect, useContext} from 'react';
import UserProfile from '../components/User/Profile/UserProfile';
import {AppContext} from '../store';
import firestore from '@react-native-firebase/firestore';
import {logout} from '../firebase/auth';

const UserScreen = () => {
  const {user} = useContext(AppContext);
  const [userName, setUserName] = useState('');
  const userId = user._user.uid;

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        setUserName(documentSnapshot.data());
      });
    return () => subscriber();
  }, [userId]);

  return <UserProfile userName={userName.name} logout={logout} />;
};

export default UserScreen;
