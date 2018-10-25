import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from "./App/HomeScreen"

export default class NachRiddles2 extends Component {
  render() {
    return(
        <HomeScreen />
    );
  }
}


// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('NachRiddles2', () => NachRiddles2);
