import React, { Component } from 'react';
import {AppRegistry, View, Image,ScrollView, StyleSheet, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Settings extends Component {
  render() {
    return (
             <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={{height:60, backgroundColor:"skyblue"}}>
            <Text style={styles.titleText}>הגדרות</Text>
          </View>
          <Text style={styles.lineText}>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    height: 45,
    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
  lineText: {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
  },


});

// skip this line if using Create React Native App
AppRegistry.registerComponent('Settings', () => Settings);
