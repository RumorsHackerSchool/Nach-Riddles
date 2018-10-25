import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ComponentHomeScreen from './app/components/ComponentHomeScreen';
import ComponentLevels from './app/components/ComponentLevels';
import ComponentAbout from './app/components/ComponentAbout';
import ComponentRiddles from './app/components/ComponentRiddles';


class ComponentApp extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם',
  };
  render() {
    const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Hello, Chat App!</Text>
       <Button
         onPress={() => navigate('Chat')}
         title="Chat with Lucy"
       />
       <Button
         onPress={() => navigate('Chat2')}
         title="Chat with Guy"
       />
     </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ComponentHomeScreen/>
      </View>
    );
  }
}


const ComponentApp = StackNavigator({
  Home: { screen: HomeScreen },
  Levels: { screen: LevelsScreen },
  About: { screen: AboutScreen },
});
export default SimpleApp;

AppRegistry.registerComponent('ComponentApp', () => ComponentApp);
