import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dorjer from '../Dorjer';

const CenterModalElement = ({convertedDuration}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{position: 'absolute', zIndex: 1}}>
        <Dorjer />
      </View>
      <Text style={styles.modalTime}>{convertedDuration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalTime: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '200',
    alignSelf: 'center',
    zIndex: 1000,
  },
});

export default CenterModalElement;
