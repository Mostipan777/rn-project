import React from 'react';
import {TextInput} from 'react-native';
import {styles} from '../common/theme';

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
};

export default Input;
