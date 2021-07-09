import React from 'react';
import {Image, Pressable, View, StyleSheet} from 'react-native';
import Back from './Back';
import Forward from './Forward';

const AudioControls = ({seek, setPaused}) => {
  return (
    <View style={styles.audioControls}>
      <Pressable onPress={() => seek('back')}>
        <Back />
      </Pressable>
      <Pressable onPress={() => setPaused()} style={styles.pauseButton}>
        <Image
          style={{width: 60, height: 60}}
          source={require('../../../assets/Pause.png')}
        />
      </Pressable>
      <Pressable onPress={() => seek('forward')}>
        <Forward />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseButton: {
    marginHorizontal: 40,
  },
});

export default AudioControls;
