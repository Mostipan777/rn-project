import React, {useState, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../common/theme';
import Button from '../containers/Button';
import Input from '../containers/Input';
import BottomComment from '../containers/BottomComment';
import {AuthContext} from '../firebase/auth';

const SignUpForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {createUser} = useContext(AuthContext);

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
            <Button title="Sign Up" onPress={() => createUser(email, password, name)} />
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
