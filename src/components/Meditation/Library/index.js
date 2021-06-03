import React, {useState} from 'react';
import {ImageBackground, Modal, View, Text} from 'react-native';
import AudioPlayer from '../../Meditation/AudioPlayer';
import library_card from '../../../img/library_card.png';
import List from '../TrackList';
import {Anchor} from '../../Unknown/Icons';
import {styles} from './styles'

const Library = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dateToString = () => {
    const dateArray = String(new Date()).split(' ');
    const rigthFormat = `${dateArray[0]} ${dateArray[2]} ${dateArray[1]}`;
    return rigthFormat;
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.backgroundImage}
        source={library_card}
        resizeMode="stretch">
        <View style={styles.topText}>
          <Text style={styles.date}>{dateToString()}</Text>
          <Text style={styles.libraryTitle}>Let’s work on your intention</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Anchor />
        </View>
        <List play={setModalVisible} />
      </ImageBackground>
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          presentationStyle="fullScreen"
          visible={modalVisible}>
          <AudioPlayer setModalVisible={setModalVisible} />
        </Modal>
      </View>
    </View>
  );
};

export default Library;
