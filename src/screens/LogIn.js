import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import LoginForm from '../components/LoginForm';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const entry = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginForm />;
};

export default Login;
