import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../components/Button';
import FormInput from '../components/FormInput';
import BottomComment from '../components/BottomComment';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const entry = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
      console.log(e);
    }
  }

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 1]}
      colors={['#FFFFFF', '#EDE8E4']}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Welcome Back</Text>
          <View>
            <FormInput
              placeholder="Email"
              onChangeText={email => setEmail(email)}
              value={email}
            />
            <FormInput
              secureTextEntry
              autoCorrect={false}
              placeholder="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <View>
            <Button title="Log In" onPress={() => entry()}/>
            <BottomComment
              basicText={'Don’t you have an account yet? '}
              link={'Sign Up'}
              onPress={() => navigation.navigate('Main')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 128,
    marginBottom: 115,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8A898E',
    marginTop: 32,
  },
});
