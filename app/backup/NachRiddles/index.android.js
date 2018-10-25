import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import ComponentBookSelector from './app/components/ComponentBookSelector'
import indexAndroid from './index.android'
import ComponentLevels from './app/components/ComponentLevels'
import ComponentAbout from './app/components/ComponentAbout'
import ComponentRiddles from './app/components/ComponentRiddles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  /*constructor(props) {
      super(props);
      this.state = {
          discounts: undefined
      }
   }*/
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>אביעה חידות מני קדם</Text>
          <View style={styles.imageViewer}>
            <View>
              <Image
                style={{ width: 360, height: 165 }}
                source={require('./app/img/Book.png')}
              />
            </View>
          </View>
        </View>
        <View style={{ height: 50 }}>
          <Text style={styles.lineText}>ברוכים הבאים למשחק חידות הנ''ך</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BookSelector')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>התחל</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Levels')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>שלבים</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Setting')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>הגדרות</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('About')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>אודות</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

class BookSelectorScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <ComponentBookSelector navigation={this.props.navigation} />
      </View>
    )
  }
}

class LevelsScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם'
  }
  render() {
    return (
      <View>
        <ComponentLevels />
      </View>
    )
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם'
  }
  render() {
    return (
      <View>
        <ComponentAbout />
      </View>
    )
  }
}

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם'
  }
  render() {
    return (
      <View>
        <ComponentSetting />
      </View>
    )
  }
}

class RiddlesScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם'
  }
  render() {
    return (
      <View>
        <ComponentRiddles />
      </View>
    )
  }
}

class BookScreen extends React.Component {
  render() {
    return <Text>Im da b00000k</Text>
  }
}

const NachRiddles = StackNavigator(
  {
    Home: { screen: HomeScreen },
    BookSelector: { screen: BookSelectorScreen },
    Levels: { screen: LevelsScreen },
    Setting: { screen: SettingScreen },
    About: { screen: AboutScreen },
    Riddles: { screen: RiddlesScreen }
  },
  { headerMode: 'screen' }
)

//export HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: 570,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  titleText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  },
  imageViewer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonView: {
    textAlign: 'center',
    width: 170,
    height: 45
  },
  button: {
    marginBottom: 5,
    width: 200,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    fontSize: 30,
    padding: 1,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('NachRiddles', () => NachRiddles)
