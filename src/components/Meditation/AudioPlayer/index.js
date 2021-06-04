import React, {useState, useContext} from 'react';
import {styles} from './styles';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import {AppContext} from '../../../store';
import Slider from '@react-native-community/slider';
import {Anchor} from '../../Unknown/Icons';
import playerBackground from '../../../img/playerBackground.png';
import additionalPlayerBackground from '../../../img/additionalPlayerBackground.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import PlayerButton from '../../Unknown/PlayerButton';
import {
  PauseButton,
  MoveBackButton,
  MoveForwardButton,
  CloseButton,
} from '../../Unknown/Icons';

const PlayerScreen = () => {
  const [isPause, setIsPause] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(null);
  const [time, setTime] = useState(null);
  const {data, meditationProgress, setMeditationProgress} =
    useContext(AppContext);
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
  };

  const track = data[route.params.itemId - 1];

  const formatedPlaybackTime = () => {
    const seconds = `0${playbackTime % 60}`.slice(-2);
    const minutes = `${Math.floor(playbackTime / 60) % 60}`;

    return `${minutes} : ${seconds}`;
  };

  const progress = event => {
    setPlaybackTime(parseInt(event.currentTime));
    const percent = (parseInt(event.currentTime) / track.duration) * 100;
    if (meditationProgress < percent) {
      setMeditationProgress(percent);
    }
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={playerBackground}>
      {!isPause ? <View style={styles.anchorBox} opacity={0.2}>
        <Anchor style={styles.anchor}/>
      </View> : null}
      <ImageBackground
        opacity={isPause ? 0.6 : 0}
        source={additionalPlayerBackground}
        style={styles.image}>
        <TouchableOpacity style={styles.closeButton} onPress={() => goBack()}>
          <CloseButton />
        </TouchableOpacity>
        <View>
          <View opacity={0.4}>
            <Text style={styles.subtitle}>{track.subtitle}</Text>
          </View>
          <Text style={styles.title}>{track.title}</Text>
        </View>
        <View style={styles.playbackTime}>
          <View opacity={isPause ? 0.2 : 1}>
            <Text style={styles.time}>{formatedPlaybackTime()}</Text>
          </View>
          {isPause ? (
            <PlayerButton title={'Finish Later'} onPress={() => goBack()} />
          ) : null}
        </View>
        <View opacity={0.4}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={track.duration}
            value={playbackTime}
            minimumTrackTintColor="black"
            maximumTrackTintColor="white"
            onValueChange={value => setTime(value)}
          />
        </View>
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
        source={{
          uri: track.audio,
        }}
        fullscreen={true}
        currentPlaybackTime
        controls={true}
        audioOnly={true}
        resizeMode={'cover'}
        paused={isPause}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        onProgress={event => progress(event)}
        currentTime={time}
      />
    </ImageBackground>
  );
};

export default PlayerScreen;
