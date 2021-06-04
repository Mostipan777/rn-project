import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoginNavigation from './LoginNavigation';
import UserNavigation from './UserNavigation';
import {AppContext} from '../store';

const Router = () => {
  const {user, setUser} = useContext(AppContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  if (initializing) return null;

  if (user) {
    return <UserNavigation />;
  }

  return <LoginNavigation />;
};

export default Router;
