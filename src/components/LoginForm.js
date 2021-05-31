import React, {useState, useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../common/theme';
import Button from '../containers/Button';
import Input from '../containers/Input';
import BottomComment from '../containers/BottomComment';
import {AuthContext} from '../firebase/auth';
import Mail from '../img/Mail';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

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
            <View
              style={{
                opacity: 0.76,
                flexDirection: 'row',
                marginHorizontal: 24,
                marginVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#A3A3A3',
                height: 40,
                alignItems: 'center',
              }}>
              <Mail style={{marginRight: 12,}} />
              <Input
                style={{flex: 1, fontSize: 16, fontWeight: '500'}}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </View>
            <Input
              secureTextEntry
              autoCorrect={false}
              placeholder="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />
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
