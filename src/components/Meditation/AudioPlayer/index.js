import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import playerBackground from '../../../img/playerBackground.png';
import additionalPlayerBackground from '../../../img/additionalPlayerBackground.png';
import PlayerButton from '../../Unknown/PlayerButton';
import {
  PauseButton,
  MoveBackButton,
  MoveForwardButton,
  CloseButton,
} from '../../Unknown/Icons';

const PlayerScreen = ({setModalVisible}) => {
  const [isPause, setIsPause] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(null);
  const [time, setTime] = useState(null);

  const formatedPlaybackTime = () => {
    const seconds = `0${playbackTime % 60}`.slice(-2);
    const minutes = `0${Math.floor(playbackTime / 60) % 60}`.slice(-2);

    return `${minutes} : ${seconds}`;
  };

  const progress = e => {
    setPlaybackTime(parseInt(e.currentTime));
  };

  return (
    <ImageBackground style={{flex: 1}} source={playerBackground}>
      <ImageBackground
        opacity={isPause ? 0.6 : 0}
        source={additionalPlayerBackground}
        style={styles.image}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}>
          <CloseButton />
        </TouchableOpacity>
        <Text style={styles.text}>Pink</Text>
        <View style={{height: 300, justifyContent: 'space-between'}}>
          <View opacity={isPause ? 0.2 : 1}>
            <Text style={styles.text}>{formatedPlaybackTime()}</Text>
          </View>
          {isPause ? (
            <PlayerButton
              title={'Finish Later'}
              onPress={() => setModalVisible(false)}
            />
          ) : null}
        </View>
        <Slider
          style={{marginHorizontal: 40}}
          minimumValue={0}
          maximumValue={200}
          value={playbackTime}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => setTime(value)}
        />
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setTime(playbackTime - 15)}>
            <MoveBackButton />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setIsPause(!isPause)}>
            <PauseButton />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setTime(playbackTime + 15)}>
            <MoveForwardButton />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Video
        source={require('../../../audio/audio.mp3')}
        fullscreen={true}
        currentPlaybackTime
        controls={true}
        audioOnly={true}
        resizeMode={'cover'}
        paused={isPause}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        onProgress={e => progress(e)}
        currentTime={time}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: 100,
  },
  text: {
    marginTop: 30,
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  controlButton: {
    marginHorizontal: 20,
    alignContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    left: 28,
    top: 68,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlayerScreen;
