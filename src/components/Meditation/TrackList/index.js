import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import {PlayButton} from '../../Unknown/Icons';
import {styles} from './styles';

const TrackList = ({play}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchTracks = async () => {
    const trackList = [];
    const snapshot = await firestore().collection('meditations').get();
    snapshot.forEach(doc => {
      const {id, title, subtitle, duration, uri} = doc.data();
      trackList.push({
        id,
        title,
        subtitle,
        duration,
        uri,
      });
      setData(trackList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const formatedDuration = (duration) => {
    const seconds = `0${duration % 60}`.slice(-2);
    const minutes = `0${Math.floor(duration / 60) % 60}`.slice(-2);

    return `${minutes} : ${seconds}`;
  };


  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: item.uri}} style={styles.logo}></Image>
          <View>
            <Text>{item.subtitle}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{formatedDuration(item.duration)}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => play(true)}>
          <PlayButton />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? null : (
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
