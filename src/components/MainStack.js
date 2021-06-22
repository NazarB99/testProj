import React from 'react';
import LoadingScreen from '../screens/LoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = ({user, initializing}) => {
  if (initializing) {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      initialRouteName={user ? 'Home' : 'SignIn'}
      headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{userId: user?.uid}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
