import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import bg from '../audio/bg.png';
import StopButton from '../img/playerIcons/StopButton';

const PlayerScreen = ({setModalVisible}) => {

  const [pause, setPause] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(null)

  const formatedPlaybackTime = () => {
    const seconds = `0${playbackTime % 60}`.slice(-2);
    const minutes = `0${Math.floor(playbackTime / 60) % 60}`.slice(-2);

    return `${minutes} : ${seconds}`;
  };

  const progress = (e) => {
    setPlaybackTime(parseInt(e.currentTime))
  }

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={bg} style={styles.image}>
        <Text style={styles.text}>Track 1</Text>
        <Text style={styles.text}>{formatedPlaybackTime()}</Text>
        <Button title="Hide" onPress={() => setModalVisible(false)} />
        <TouchableOpacity onPress={() => setPause(!pause)}>
          <StopButton />
        </TouchableOpacity>
      </ImageBackground>
      <Video
        source={require('../audio/audio.mp3')}
        // ref={ref => (this.player = ref)}
        // poster={'https://media.istockphoto.com/vectors/colourful-retro-the-90s-rock-poster-design-with-boom-box-and-audio-vector-id1224789453'}
        // posterResizeMode={"cover"}
        fullscreen={true}
        currentPlaybackTime
        controls={true}
        audioOnly={true}
        resizeMode={'cover'}
        paused={pause}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        onProgress={e => progress(e)}
      />
    </View>
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
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    marginTop: 30,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlayerScreen;
