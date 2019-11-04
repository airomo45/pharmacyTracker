
import React from 'react';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReminderScreen from '../screens/ReminderScreen';


const MainNavigator = createStackNavigator({
  Home: {screen: ReminderScreen},
  Profile: {screen: LinksScreen},
});

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;
