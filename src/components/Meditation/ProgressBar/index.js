import React, {useEffect, useRef, useContext} from 'react';
import LottieView from 'lottie-react-native';
import {AppContext} from '../../../store'
import { useIsFocused } from '@react-navigation/native'


const ProgressBar = () => {
  const {meditationProgress} = useContext(AppContext);
  const LottieRef = useRef(null);
  const isFocused = useIsFocused()

  useEffect(() => {
    if (LottieRef.current !== null) {
      const currentProgress = 1 * meditationProgress;
      LottieRef.current.play(0, currentProgress);
      console.log(meditationProgress)
    }
  }, [isFocused, meditationProgress]);

  return (
    <LottieView
      style={{width: 300, height: 300}}
      source={require('../../../animation/progressbar.json')}
      speed={1}
      ref={LottieRef}
      loop={false}
    />
  );
};

export default ProgressBar;
