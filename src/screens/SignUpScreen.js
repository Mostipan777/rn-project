import React, {useState} from 'react';
import SignUpForm from '../components/User/SignUp/SignUpForn';
import {createUser} from '../firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignUpForm
      navigation={navigation}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      name={name}
      setName={setName}
      createUser={createUser}
    />
  );
};

export default SignUpScreen;
