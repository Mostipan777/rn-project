import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Navigation from '../navigation/navigation';

import {AppContext} from '../store';
import UserScreen from '../screens/UserScreen';

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

  if (!user) {
    return <Navigation />;
  }

  return <UserScreen />;
};

export default Router;
