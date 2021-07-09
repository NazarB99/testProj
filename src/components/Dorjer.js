import React from 'react';
import DorjerShape from './DorjerShape';
import {View} from 'react-native';

const Dorjer = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <DorjerShape />
    </View>
  );
};

export default Dorjer;
