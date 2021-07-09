import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = ({color}) => {
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
        d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C10.8679 18 12.6029 17.431 14.041 16.4568L17.7929 20.2071L17.8871 20.2903C18.2794 20.5953 18.8466 20.5676 19.2071 20.2071C19.5976 19.8166 19.5976 19.1834 19.2071 18.7929L15.5677 15.1535C17.0762 13.5441 18 11.3799 18 9ZM2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
