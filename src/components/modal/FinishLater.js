import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

const FinishLater = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.finishLater}>
        <Text style={styles.finishLaterText}>Finish Later</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  finishLater: {
    backgroundColor: 'rgba(255,255,255, .2)',
    paddingVertical: 19,
    alignItems: 'center',
    borderRadius: 10,
  },
  finishLaterText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default FinishLater;
