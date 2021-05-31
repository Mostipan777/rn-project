import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Button from '../containers/Button';
import Input from '../containers/Input';
import BottomComment from '../containers/BottomComment';

export default function Main({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .set({
              id: 1,
              name: email,
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 1]}
      colors={['#FFFFFF', '#EDE8E4']}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Create an Account</Text>
          <View>
            <Input
              placeholder="Email"
              onChangeText={email => setEmail(email)}
              value={email}
            />
            <Input
              placeholder="Name"
              onChangeText={name => setName(name)}
              value={name}
            />
            <Input
              secureTextEntry
              autoCorrect={false}
              placeholder="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <View>
            <Button title="Sign Up" onPress={() => register()} />
            <BottomComment
              basicText={'Already have an account? '}
              link={'Log In'}
              onPress={() => navigation.navigate('LogIn')}
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
