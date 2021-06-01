import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../common/theme'


const Input = ({placeholder, value, ...rest}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.darkGray}
      value={value}
      {...rest}
    />
  );
};

export default Input;
