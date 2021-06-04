import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileActiveIcon = props => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6a6 6 0 10-9.713 4.712A10.003 10.003 0 000 20a1 1 0 102 0 8 8 0 1116 0 1 1 0 102 0c0-4.21-2.603-7.814-6.286-9.287A5.99 5.99 0 0016 6zM6 6a4 4 0 118 0 4 4 0 01-8 0z"
        fill="#D49499"
      />
    </Svg>
  );
};

export default ProfileActiveIcon;
