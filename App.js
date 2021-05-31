import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Navigation from './src/navigation/navigation';

import UserScreen from './src/screens/UserScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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

  return <UserScreen user={user}/>;
};

export default App;
