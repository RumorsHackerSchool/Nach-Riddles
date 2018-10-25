import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './Home'
import Riddles from './Riddles'
import Introduction from './Introduction'
import Parasha from './Parasha'
import About from './About'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <Home navigation={this.props.navigation} />
      </View>
    )
  }
}

class RiddlesScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Riddles navigation={this.props.navigation} />
      </View>
    )
  }
}

class IntroductionScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Introduction navigation={this.props.navigation} />
      </View>
    )
  }
}

class ParashaScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Parasha navigation={this.props.navigation} />
      </View>
    )
  }
}

class AboutScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <About navigation={this.props.navigation} />
      </View>
    )
  }
}

const Navigate = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Riddles: { screen: RiddlesScreen },
    Introduction: { screen: IntroductionScreen },
    Parasha: { screen: ParashaScreen },
    About: { screen: AboutScreen }
  },
  { headerMode: 'screen' }
)

// skip this line if using Create React Native App
AppRegistry.registerComponent('NachRiddles', () => Navigate)
