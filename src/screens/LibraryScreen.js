import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import dayjs from 'dayjs';
import firestore from '@react-native-firebase/firestore';
import {GREY_INACTIVE} from '../commons/Constants';
import PlayerModal from '../components/PlayerModal';
import MeditationItem from '../components/MeditationItem';
import Dorjer from '../components/Dorjer';

const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);
const image = require('../../assets/Today_Anchor.png');

const LibraryScreen = () => {
  const [meditations, setMeditations] = useState([]);
  const [audioPlayerActive, setAudioPlayerActive] = useState(false);
  const [medItem, setMedItem] = useState(null);

  useEffect(() => {
    firestore()
      .collection('Meditations')
      .get()
      .then(querySnapshot => {
        setMeditations(querySnapshot.docs);
      })
      .catch(err => console.log(err));
  }, []);
  const getCurrentDate = () => {
    return dayjs().format('ddd D MMM');
  };

  const renderItem = item => {
    const itemData = item.data();
    return (
      <MeditationItem
        itemData={itemData}
        onPress={() => {
          setMedItem(itemData);
          setAudioPlayerActive(true);
        }}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <PlayerModal
        active={audioPlayerActive}
        medItem={medItem}
        setActive={setAudioPlayerActive}
      />
      <View style={styles.topSection} source={image}>
        <View style={styles.topSectionWrapper}>
          <View>
            <Text style={styles.date}>{getCurrentDate()}</Text>
            <Text style={styles.title}>Let's work on your intention</Text>
          </View>
          <Dorjer />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <FlatList
          horizontal
          contentContainerStyle={styles.flatListContainer}
          data={meditations}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 16,
    color: GREY_INACTIVE,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    color: '#1B181C',
    fontWeight: '500',
  },
  flatListContainer: {
    paddingLeft: 24,
  },
  topSection: {
    flex: 3,
    backgroundColor: '#E3E1E6',
    paddingTop: 42,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    height: '80%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  topSectionWrapper: {
    flex: 1,
    transform: [{scaleX: 0.5}],
  },
  image: {
    alignSelf: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LibraryScreen;
