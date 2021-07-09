import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SubmitButton from '../components/SubmitButton';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {DEVICE_HEIGHT} from '../commons/Constants';

const HomeScreen = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    console.log('PARAMS', route.params);
    firestore()
      .collection('Users')
      .where('userId', '==', route.params?.userId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc);
          const user = doc.data();
          setUsername(user.username);
        });
      })
      .catch(err => console.log(err));
  }, [route.params?.userId]);

  const makeLogout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        );
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.userAvatar}>
        <Image
          style={styles.userImage}
          source={require('../../assets/user_image.png')}
        />
        <View style={styles.userNameWrapper}>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
      </View>
      <SubmitButton text="Logout" onPress={makeLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: DEVICE_HEIGHT * 0.1,
  },
  userAvatar: {
    alignItems: 'center',
  },
  userNameWrapper: {
    position: 'absolute',
    bottom: -20,
    paddingHorizontal: 36,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: '700',
  },
  userImage: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
});

export default HomeScreen;
