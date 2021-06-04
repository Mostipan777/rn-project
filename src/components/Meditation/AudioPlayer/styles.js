import {StyleSheet} from 'react-native';
import {fonts} from '../../../common/theme';
import {Dimensions} from 'react-native';

let height = Dimensions.get('window').height / 3.6

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
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
  title: {
    color: 'white',
    fontWeight: '400',
    fontSize: fonts.playerTitle,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 25,
    color: 'white',
    fontSize: fonts.playerSubtitle,
    fontWeight: '400',
    textAlign: 'center',
  },
  time: {
    marginTop: 120,
    color: 'white',
    fontSize: 80,
    fontWeight: '200',
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
  anchor: {
    position: 'absolute',
    top: height,
  },
  anchorBox: {
    alignItems: 'center',
  },
  playbackTime: {
    marginVertical: 30,
    height: 350,
    justifyContent: 'space-between',
  },
  slider: {
    marginHorizontal: 40,
  },
});
