import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component1 from './app/components/Component1';

export default class NachRiddles extends Component{
  render() {
    return(
      <View>
        <OpeningPage/>
        <Image style={{ flex:1, height:null, width:null }} source={require("../img/header_logo.png")}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
