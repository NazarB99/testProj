import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Video from 'react-native-video';
import Close from './modal/Close';
import {Slider} from '@miblanchard/react-native-slider';
import AudioControls from './modal/AudioControls';
import FinishLater from './modal/FinishLater';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../commons/Constants';
import Dorjer from "./Dorjer";
import CenterModalElement from "./modal/CenterModalElement";

const PlayerModal = ({active, setActive, medItem}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [convertedDuration, setConvertedDuration] = useState('');
  const [totalDuration, setTotalDuration] = useState();
  const [paused, setPaused] = useState(false);

  const onAudioProgress = data => {
    setCurrentTime(Math.round(data.currentTime));
    const remaining = data.seekableDuration - data.currentTime;
    const minutes = Math.floor(remaining / 60);
    const sec = Math.round(remaining - minutes * 60);
    const seconds = sec < 10 ? '0' + sec : sec;
    // const roundedNumber = Math.round(remaining * 100) / 100;
    setConvertedDuration(`${minutes}:${seconds}`);
  };

  const seek = direction => {
    if (direction === 'back') {
      const seekedTime = currentTime - 15;
      if (seekedTime !== 0) {
        this.player.seek(seekedTime);
      }
    }
    if (direction === 'forward') {
      console.log(totalDuration);
      const seekedTime = currentTime + 15;
      seekedTime < totalDuration
        ? this.player.seek(seekedTime)
        : this.player.seek(currentTime + (totalDuration - currentTime));
    }
  };

  const closeModal = () => {
    setActive(false);
    setCurrentTime(0);
    setTotalDuration(0);
    setConvertedDuration('');
    setPaused(false);
  };

  return medItem ? (
    <Modal animationType="slide" visible={active}>
      <Video
        paused={paused}
        onLoad={data => setTotalDuration(data.duration)}
        source={{
          uri: medItem.audioUrl,
        }}
        onProgress={data => onAudioProgress(data)}
        ref={ref => {
          this.player = ref;
        }}
      />
      <ImageBackground
        style={{height: DEVICE_HEIGHT, width: DEVICE_WIDTH}}
        source={require('../../assets/backdrop.png')}>
        <SafeAreaView style={styles.modalWrapper}>
          <Pressable style={styles.closeButton} onPress={closeModal}>
            <Close />
          </Pressable>
          <View style={styles.main}>
            <View style={styles.infoStyle}>
              <Text style={styles.modalSubtitle}>{medItem.subtitle}</Text>
              <Text style={styles.modalTitle}>{medItem.title}</Text>
            </View>
            <CenterModalElement convertedDuration={convertedDuration} />
            <View>
              {paused ? <FinishLater onPress={closeModal} /> : null}
              <Slider
                thumbTintColor="#fff"
                minimumTrackTintColor="#fff"
                value={currentTime}
                onSlidingComplete={data => this.player.seek(data[0], 50)}
                minimumValue={0}
                maximumValue={medItem.duration}
              />
              <AudioControls seek={seek} setPaused={() => setPaused(!paused)} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  ) : null;
};

const styles = StyleSheet.create({
  closeButton: {
    marginTop: 20,
    marginLeft: 30,
  },
  infoStyle: {
    alignSelf: 'center',
    marginTop: 30,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: '#50362C',
    paddingHorizontal: 30,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalSubtitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});

export default PlayerModal;
