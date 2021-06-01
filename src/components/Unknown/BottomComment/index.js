import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const BottomComment = ({basicText, link, onPress}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.basicText}>{basicText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomComment