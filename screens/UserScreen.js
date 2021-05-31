import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../components/Button';

export default function UserScreen({user}) {

  const logout = async () => {
    try {
      await auth().signOut()
      } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../img/userLogo.png')} />
          <View
            style={styles.userNameBackground}>
            <Text style={styles.userName}>{user._user.email}</Text>
          </View>
        </View>
        <View>
          <Button title="Logout" onPress={() => logout()}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 128,
    marginBottom: 164,
  },
  userNameBackground: {
    shadowOpacity: 0.1,
    shadowRadius: 22,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    position: 'absolute',
    bottom: -17,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: '900',
  }
});
