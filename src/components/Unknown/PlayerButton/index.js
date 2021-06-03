import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const PlayerButton = ({title, onPress, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...rest}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PlayerButton;
