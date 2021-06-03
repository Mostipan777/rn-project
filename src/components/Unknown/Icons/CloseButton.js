import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseButton = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.293 4.293a1 1 0 011.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 011.497 1.32l-.083.094L13.415 12l6.292 6.293.083.094a1 1 0 01-1.403 1.403l-.094-.083L12 13.415l-6.293 6.292a1 1 0 01-1.497-1.32l.083-.094L10.585 12 4.293 5.707l-.083-.094a1 1 0 01.083-1.32z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CloseButton;
