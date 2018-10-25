import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'
import parasha from '../database/parasha2'

export default class Parasha extends Component {
  render() {
    let parasha_number = this.props.navigation.state.params.parasha
    const parasha_name = this.props.navigation.state.params.parasha_name
    if (parasha_number / 22 === 1) {
      parasha_number = parasha_number - 1
    }
    console.log('in the parasha component', parasha_number)
    console.log('parasha name', parasha_name)
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../img/riddle.jpg')}>
          <View style={styles.backdropView}>
            <View style={{ height: 60, backgroundColor: '#2196F3' }}>
              <Text style={styles.titleText}>
                {parasha_name.riddle_section}
              </Text>
            </View>
            <ScrollView>
              <Text style={styles.lineText}>
                {parasha[parasha_number].parasha}
              </Text>
            </ScrollView>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center'
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)'
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'nrkis'
  },
  lineText: {
    padding: 5,
    color: 'black',
    fontSize: 20
  },
  ImageLine: {
    resizeMode: 'stretch'
  },
  lineLink: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20
  }
})
