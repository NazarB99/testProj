import React from 'react';
import Svg, {Path} from 'react-native-svg';

const AccountIcon = ({color}) => {
  return (
    <Svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 6C16 2.68629 13.3137 0 10 0C6.68629 0 4 2.68629 4 6C4 7.91137 4.89375 9.614 6.28694 10.712C2.60259 12.1863 0 15.7892 0 20C0 20.5523 0.447715 21 1 21C1.55228 21 2 20.5523 2 20C2 15.5817 5.58172 12 10 12C14.4183 12 18 15.5817 18 20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20C20 15.7892 17.3974 12.1863 13.7139 10.7128C15.1063 9.614 16 7.91137 16 6ZM6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6Z"
        fill={color}
      />
    </Svg>
  );
};

export default AccountIcon;
