import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function BottomComment({basicText, link, onPress}) {
  return (
    <View style={styles.comment}>
      <Text style={styles.basicText}>{basicText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  basicText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8A898E',
    marginTop: 32,
  },
  link: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8A898E',
    marginTop: 32,
    textDecorationLine: 'underline'
  },
});
