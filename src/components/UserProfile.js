import React, {useContext} from 'react';
import {styles} from '../common/theme';
import {SafeAreaView, Text, View, Image} from 'react-native';
import image from '../img/userLogo.png';
import Button from '../containers/Button';
import {AuthContext} from '../firebase/auth';

const UserProfile = ({userName}) => {
  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={image} />
          <View style={styles.userNameBackground}>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
        <View>
          <Button title="Logout" onPress={() => logout()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
