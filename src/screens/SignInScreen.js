import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TITLE_TEXT_COLOR} from '../commons/Constants';
import AuthInput from '../components/AuthInput';
import SubmitButton from '../components/SubmitButton';
import BottomHelp from '../components/BottomHelp';
import {CommonActions} from '@react-navigation/native';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const makeSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
                params: {
                  userId: data.user.uid,
                },
              },
            ],
          }),
        );
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          alert('Wrong password');
        }
        alert(error.code);
      });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Welcome Back</Text>
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
          width={16}
          height={18}
          image={require('../../assets/pass.png')}
          placeholder="Password"
          value={password}
          onChange={text => setPassword(text)}
          isPasswordInput
        />
      </View>
      <View style={styles.authBottom}>
        <SubmitButton text="Sign In" onPress={makeSignIn} />
        <BottomHelp
          pressableText="Sign Up"
          text="Don't have your account yet?"
          onPress={goToSignUp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 100,
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
});

export default SignInScreen;
