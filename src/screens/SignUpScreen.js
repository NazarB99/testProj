import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthInput from '../components/AuthInput';
import SubmitButton from '../components/SubmitButton';
import {DARK_GREY, TITLE_TEXT_COLOR} from '../commons/Constants';
import BottomHelp from '../components/BottomHelp';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const makeSignUp = () => {
    if (username !== '') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          firestore()
            .collection('Users')
            .add({
              userId: data.user.uid,
              username: username,
            })
            .then(() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'TabNav',
                      params: {
                        userId: data.user.uid,
                      },
                    },
                  ],
                }),
              ),
            )
            .catch(err => alert(err));
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          alert(error.code);
        });
    } else {
      alert('Username cannot be empty');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.inputsWrapper}>
        <AuthInput
          width={19}
          height={14}
          image={require('../../assets/envelope.png')}
          placeholder="Email"
          value={email}
          onChange={text => setEmail(text)}
        />
        <AuthInput
          width={20}
          height={20}
          image={require('../../assets/Shape.png')}
          placeholder="Username"
          value={username}
          onChange={text => setUsername(text)}
        />
        <AuthInput
          width={16}
          height={18}
          image={require('../../assets/pass.png')}
          placeholder="Password"
          isPasswordInput
          value={password}
          onChange={text => setPassword(text)}
        />
      </View>
      <View style={styles.authBottom}>
        <SubmitButton text="Sign Up" onPress={makeSignUp} />
        <BottomHelp
          pressableText="Sign In"
          text="Already have an account?"
          onPress={goToSignIn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 116,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: TITLE_TEXT_COLOR,
    alignSelf: 'center',
    flex: 1,
  },
  inputsWrapper: {
    flex: 3,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  authBottom: {
    flex: 1,
    justifyContent: 'space-between',
  },
  signUp: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpText: {
    marginLeft: 3,
    textDecorationLine: 'underline',
    color: DARK_GREY,
  },
});

export default SignUpScreen;
