import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import AccountIcon from './icons/AccountIcon';
import SearchIcon from './icons/SearchIcon';
import {GREY_INACTIVE, PINK_ACCENT} from '../commons/Constants';

const Tab = createBottomTabNavigator();

const TabNav = ({route}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: PINK_ACCENT,
        inactiveTintColor: GREY_INACTIVE,
      }}>
      <Tab.Screen
        name="Library"
        options={{
          tabBarIcon: ({color, size}) => <SearchIcon color={color} />,
        }}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Profile"
        initialParams={route.params}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <AccountIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
