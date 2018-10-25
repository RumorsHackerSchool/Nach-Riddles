import React, {Component} from 'react';
import { Text, View } from 'react-native';


class RiddleSectionsHeader2 extends Component{
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
    flex:2,
    alignItems:'center',
    backgroundColor: '#472747',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin:0,
    flexWrap: 'wrap'
  },
  textStyle: {
    textAlign: 'center',
    fontSize:15,
    color: 'white',
  }

};

export {RiddleSectionsHeader2};
