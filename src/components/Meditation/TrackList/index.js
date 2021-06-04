import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import LoadingBar from '../LoadingBar'
import {useNavigation} from '@react-navigation/native';
import {PlayButton} from '../../Unknown/Icons';
import {styles} from './styles';

const TrackList = ({data, isLoading}) => {
  const navigation = useNavigation();


  const formatedDuration = duration => {
    return `${Math.round(duration / 60)} mins`;
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <Image source={{uri: item.uri}} style={styles.logo}></Image>
            <View>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.duration}>
                {formatedDuration(item.duration)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AudioPlayer', {
                itemId: item.id,
              })
            }>
            <PlayButton />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  

  return (
    <View>
      {isLoading ? <LoadingBar /> : (
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TrackList;
