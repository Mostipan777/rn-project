import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity} from 'react-native';
import {colors, styles} from '../common/theme';

const Button = ({title, onPress, ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <LinearGradient
        style={styles.button}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 1]}
        colors={[colors.lightPink, colors.darkPink]}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
