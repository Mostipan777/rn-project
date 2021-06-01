import React, {useState} from 'react';
import LoginForm from '../components/User/Login/LoginForm';
import {login} from '../firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginForm
      navigation={navigation}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      login={login}
    />
  );
};

export default LoginScreen;
