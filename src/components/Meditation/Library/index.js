import React, {useState, useContext} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import library_card from '../../../img/library_card.png';
import List from '../TrackList';
import {AppContext} from '../../../store';
import {Anchor} from '../../Unknown/Icons';
import {styles} from './styles';
import ProgressBar from '../ProgressBar';
import LottieView from 'lottie-react-native';

const Library = ({isLoading, navigation}) => {
  const {data} = useContext(AppContext);

  const dateToString = () => {
    const dateArray = String(new Date()).split(' ');
    const rigthFormat = `${dateArray[0]} ${dateArray[2]} ${dateArray[1]}`;
    return rigthFormat;
  };

  return (
    <View style={{height: '75%'}}>
      <ImageBackground
        style={styles.backgroundImage}
        source={library_card}
        resizeMode="stretch">
        <View style={styles.topText}>
          <Text style={styles.date}>{dateToString()}</Text>
          <Text style={styles.libraryTitle}>Let’s work on your intention</Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 70}}>
          <ProgressBar />
          {/* <Anchor style={styles.anchor} /> */}
        </View>
      </ImageBackground>
      <List navigation={navigation} data={data} isLoading={isLoading} />
    </View>
  );
};

export default Library;
