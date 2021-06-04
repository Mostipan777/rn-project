import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LibraryActiveIcon = (props) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9a9 9 0 10-3.959 7.457l3.752 3.75.094.083a1 1 0 001.32-1.497l-3.64-3.64A8.969 8.969 0 0018 9zM2 9a7 7 0 1114 0A7 7 0 012 9z"
        fill="#D49499"
      />
    </Svg>
  )
}

export default LibraryActiveIcon;
