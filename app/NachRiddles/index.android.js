import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import indexAndroid from './index.android';
import ComponentLevels from './app/components/ComponentLevels';
import ComponentAbout from './app/components/ComponentAbout';
import ComponentRiddles from './app/components/ComponentRiddles';


export default class HomeScreen extends React.Component{
/*constructor(props) {
      super(props);
      this.state = {
          discounts: undefined
      }
   }*/
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>אביעה חידות מני קדם</Text>
            <View style={styles.imageViewer}>
            <Image style={{width: 360, height:200}} source={require("./app/img/Book.png")}/>
          </View>
        </View>
      <View style={{height:50}}>
      <Text style={styles.lineText}>ברוכים הבאים למשחק חידות הנ''ך</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => this.props.navigation.navigate('Riddles')}
          title="התחל"
          color='skyblue'
        />
        </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => this.props.navigation.navigate('Levels')}
          title="שלבים"
          color='skyblue'
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => this.props.navigation.navigate('Setting')}
          title="הגדרות"
          color='skyblue'
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="אודות"
          color='skyblue'
        />
      </View>
      </View>
    );
  }
}

class RiddlesScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם',
  };
  render() {
    return (
      <View>
        <ComponentRiddles/>
      </View>
    );
  }
}

class LevelsScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם',
  };
  render() {
    return (
      <View>
        <ComponentLevels/>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם',
  };
  render() {
    return (
      <View>
        <ComponentAbout/>
      </View>
    );
  }
}


class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם',
  };
  render() {
    return (
      <View>
        <ComponentSetting/>
      </View>
    );
  }
}

const NachRiddles = StackNavigator({
  Home: { screen: HomeScreen },
  Riddles: { screen: RiddlesScreen },
  Levels: { screen: LevelsScreen },
  Setting: { screen: SettingScreen },
  About: { screen: AboutScreen },
});
//export HomeScreen;


const styles = StyleSheet.create({
  container: {
    height:545,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViewer: {
    height:170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  lineText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    textAlign: 'center',
    width: 150,
    height: 45
  }

});



// skip this line if using Create React Native App
AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
