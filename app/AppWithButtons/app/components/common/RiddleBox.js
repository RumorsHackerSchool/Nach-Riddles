import React, {Component} from 'react';
import { Text, View } from 'react-native';


class RiddleBox extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
};

const styles = {
  viewStyle:{
    alignItems:'center',
    justifyContent:'center',
    height: 180,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontFamily: 'stam1',
    fontSize:30,
    color: '#2196F3',
    textAlign: 'center',
  }

};

export {RiddleBox};
