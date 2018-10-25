import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


class GetClue extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>{this.props.headerText}{this.props.headerText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = {
  viewStyle:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#472747',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin:0,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'nrkis',
    textAlign: 'center',
    fontSize:15,
    color: 'white',
  }

};

export {GetClue};
