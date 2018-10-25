import React from 'react';
import {
  AppRegistry,
  Text, View, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Guy extends React.Component {

  render() {
   return (
     <View>
       <Text>this is Guy component</Text>
     </View>
    );
  }
}




// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('Guy', () => Guy);
