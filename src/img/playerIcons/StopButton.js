import React from 'react';
import Svg, {Path} from 'react-native-svg';

const StopButton = props => {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm-5 21h-4a1 1 0 00-.993.883L22 22v20a1 1 0 00.883.993L23 43h4a1 1 0 00.993-.883L28 42V22a1 1 0 00-.883-.993L27 21zm14 0h-4a1 1 0 00-.993.883L36 22v20a1 1 0 00.883.993L37 43h4a1 1 0 00.993-.883L42 42V22a1 1 0 00-.883-.993L41 21z"
        fill="#fff"
      />
    </Svg>
  );
};

export default StopButton;
