import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder, value, ...rest}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#8A898E"
      value={value}
      {...rest}
    />
  );
}

export default Input

const styles = StyleSheet.create({
    input: {
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(163, 163,163, .24)',
      fontSize: 16,
      height: 40,
    },
  });
