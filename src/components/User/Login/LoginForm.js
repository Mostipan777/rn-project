import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colors} from '../../../common/theme';
import Button from '../../Unknown/Button';
import Input from '../../Unknown/Input';
import BottomComment from '../../Unknown/BottomComment';
import {Mail, Lock} from '../../Unknown/Icons';

const LoginForm = ({
  navigation,
  email,
  setEmail,
  password,
  setPassword,
  login,
}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 1]}
      colors={[colors.white, colors.lightBronze]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Welcome Back</Text>
          <View>
            <View style={styles.inputContainer}>
              <Mail style={styles.inputIcon} />
              <Input
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Lock style={styles.inputIcon} />
              <Input
                secureTextEntry
                autoCorrect={false}
                placeholder="Password"
                value={password}
                onChangeText={password => setPassword(password)}
              />
            </View>
          </View>
          <View>
            <Button title="Log In" onPress={() => login(email, password)} />
            <BottomComment
              basicText={'Don’t you have an account yet? '}
              link={'Sign Up'}
              onPress={() => navigation.navigate('SignUpScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginForm;
