import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MoveForwardButton = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 2.383a.5.5 0 01.257.071l3.528 2.117a.5.5 0 010 .858l-3.528 2.117a.5.5 0 01-.757-.43V6L9 6a6 6 0 000 12 1 1 0 110 2 8 8 0 01-.25-15.996L9 4h7V2.882a.5.5 0 01.5-.5zM21.556 11v1.028h-3.593l-.238 2.49h.092c.33-.525.943-.828 1.663-.828 1.41 0 2.435 1.008 2.515 2.415l.005.189C22 17.896 20.84 19 19.193 19c-1.475 0-2.512-.88-2.69-2.068l-.02-.157-.005-.07h1.138l.006.043c.103.688.726 1.234 1.582 1.234.914 0 1.565-.617 1.63-1.514l.006-.163c0-.964-.682-1.646-1.625-1.646-.477 0-.884.14-1.192.422a1.596 1.596 0 00-.283.326l-.075.129h-1.046L17.01 11h4.547zm-7.283 7.81V11h-1.214L11 12.461v1.191l1.967-1.402h.092v6.56h1.214z"
        fill="#fff"
        opacity={0.8}
      />
    </Svg>
  );
};

export default MoveForwardButton;
