import React from 'react';
import {styles} from '../../../common/theme';
import {SafeAreaView, Text, View, Image} from 'react-native';
import UserLogo from '../../../img/UserLogo';
import Button from '../../Unknown/Button';

const UserProfile = ({userName, logout}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UserLogo />
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
