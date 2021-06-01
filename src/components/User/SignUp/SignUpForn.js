import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../../../common/theme';
import Button from '../../Unknown/Button';
import Input from '../../Unknown/Input';
import BottomComment from '../../Unknown/BottomComment';
import Mail from '../../../img/Mail';
import Info from '../../../img/Info';
import Lock from '../../../img/Lock';

const SignUpForm = ({
  navigation,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  createUser,
}) => {
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
            <View style={styles.inputContainer}>
              <Mail style={styles.inputIcon} />
              <Input
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Info style={styles.inputIcon} />
              <Input
                placeholder="Name"
                onChangeText={name => setName(name)}
                value={name}
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
            <Button
              title="Sign Up"
              onPress={() => createUser(email, password, name)}
            />
            <BottomComment
              basicText={'Already have an account? '}
              link={'Log In'}
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUpForm;
