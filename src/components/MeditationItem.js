import React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import {DEVICE_WIDTH, getDuration, GREY_INACTIVE} from '../commons/Constants';

const MeditationItem = ({itemData, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.meditationImageView}>
          <Image
            style={styles.meditationImage}
            source={{uri: itemData.imageUrl}}
          />
        </View>
        <View style={styles.meditationInfo}>
          <Text style={styles.meditationSubtitle}>{itemData.subtitle}</Text>
          <Text style={styles.meditationTitle}>{itemData.title}</Text>
          <Text style={styles.meditationDuration}>
            {getDuration(itemData.duration)} mins
          </Text>
        </View>
        <View style={styles.playImageView}>
          <Image
            style={styles.playImage}
            source={require('../../assets/play.png')}
            resizeMode="stretch"
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  meditationInfo: {
    marginLeft: 16,
    flex: 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    height: 88,
    width: DEVICE_WIDTH * 0.87,
    marginRight: 12,
    borderRadius: 10,
  },
  playImageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playImage: {
    width: 16,
    height: 16,
  },
  meditationImageView: {
    flex: 1,
  },
  meditationImage: {
    height: 56,
    width: 56,
    borderRadius: 6,
  },
  meditationSubtitle: {
    fontSize: 14,
    color: '#8A898E',
    fontWeight: '500',
  },
  meditationTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  meditationDuration: {
    fontSize: 14,
    color: GREY_INACTIVE,
    fontWeight: '500',
  },
});

export default MeditationItem;
