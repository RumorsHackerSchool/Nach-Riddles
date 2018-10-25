import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Header extends Component{
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
    backgroundColor: '#f8f8f8',
    alignItems:'center',
    justifyContent:'center',
    height: 60,
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize:20
  }

};

export {Header};
