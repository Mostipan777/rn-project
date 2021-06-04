import React from 'react';
import LottieView from 'lottie-react-native';

const LoadingBar = () => {
  return (
    <LottieView
      style={{height: 300}}
      source={require('../../../animation/loading.json')}
      speed={1}
      autoPlay
    />
  );
};

export default LoadingBar;
