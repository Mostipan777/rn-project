import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlayButton = props => {
  return (
    <Svg
      width={15}
      height={18}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.038.845l10.226 6.21a2 2 0 01.043 3.393L3.081 17.02A2 2 0 010 15.337V2.555A2 2 0 013.038.845z"
        fill="#D49499"
      />
    </Svg>
  );
};

export default PlayButton;
