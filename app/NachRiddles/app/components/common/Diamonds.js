import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';


class Diamonds extends Component{

  render(){
    return(
      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle} source={require('../../img/diamond.gif')}/>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>

    )
  }
};

const styles = {
  viewStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#8e4e8e',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin:0,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageStyle:{
    flex:1,
    alignItems:'center',
    marginLeft:0,
    height: 100,


  },
  textStyle: {
    flex:0.9,
    fontFamily: 'nrkis',
    textAlign: 'center',
    fontSize:28,
    color: 'white',
  }

};

export {Diamonds};
