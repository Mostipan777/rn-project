import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {styles} from '../common/theme';
import Button from '../components/Button';
import Input from '../components/Input';
import BottomComment from '../components/BottomComment';

const LoginForm = ({navigation}) => {
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
            <Input
              placeholder="Email"
              onChangeText={email => setEmail(email)}
              value={email}
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
            <Button title="Log In" onPress={() => entry()} />
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
};

export default LoginForm;
