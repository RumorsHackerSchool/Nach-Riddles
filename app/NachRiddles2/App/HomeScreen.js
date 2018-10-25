import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const NachRiddles2 = StackNavigator({
  Home: { screen: HomeScreen },
});
export default NachRiddles2;

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
