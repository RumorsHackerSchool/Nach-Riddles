import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

import Riddles from './Riddles'

export default class BookSelector extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <View>
            <Text style={styles.titleText}>שלבים</Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Riddles')}
          >
            <View style={styles.container2}>
              <Image
                style={styles.backdrop}
                source={require('../img/open-book2.png')}
              >
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>ספר יהושע</Text>
                </View>
              </Image>
            </View>
          </TouchableOpacity>
          {/*
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Riddles')}>
              <View style={styles.container2}>
                 <Image
                   style={styles.backdrop}
                   source={require("../img/open-book2.png")}>
                      <View style={styles.backdropView}>
                       <Text style={styles.headline}>ספר שופטים</Text>
                     </View>
                 </Image>
               </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Riddles')}>
              <View style={styles.container2}>
                 <Image
                   style={styles.backdrop}
                   source={require("../img/open-book2.png")}>
                     <View style={styles.backdropView}>
                       <Text style={styles.headline}>ספר שמואל</Text>
                     </View>
                 </Image>
               </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Riddles')}>
              <View style={styles.container2}>
                 <Image
                   style={styles.backdrop}
                   source={require("../img/open-book2.png")}>
                     <View style={styles.backdropView}>
                       <Text style={styles.headline}>ספר מלכים</Text>
                     </View>
                 </Image>
               </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Riddles')}>
              <View style={styles.container2}>
                 <Image
                   style={styles.backdrop}
                   source={require("../img/open-book2.png")}>
                     <View style={styles.backdropView}>
                       <Text style={styles.headline}>ספר דניאל</Text>
                     </View>
                 </Image>
               </View>
            </TouchableOpacity>
*/}
        </View>
      </ScrollView>
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

const styles = StyleSheet.create({
  titleText: {
    height: 60,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: 'steelblue'
  },
  container2: {
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 90,
    width: 350
  },
  backdrop: {
    margin: 5,
    padding: 0,
    width: 340,
    height: 80
  },
  backdropView: {
    padding: 0,
    width: 340,
    height: 80,
    backgroundColor: 'rgba(176,224,230, 0.8)'
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 60,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('BookSelector', () => BookSelector)
