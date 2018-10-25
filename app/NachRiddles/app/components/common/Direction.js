import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import Introduction from '../Introduction';


class Direction extends Component{

comp(){
  return (<Introduction />)
}


  render(){
    return(

      <View style={styles.viewStyle}>
        <TouchableOpacity style={{flex:1, flexDirection:'row', alignItems:'center'}} onPress={() => this.props.navigation.navigate('Introduction')}>
          <Image style={styles.imageStyle} source={require('../../img/sign.png')}/>
          <Text style={styles.textStyle}>הוראות</Text>
        </TouchableOpacity>
      </View>


    )
  }
};

const styles = {
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalDirections: {
    backgroundColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    width: 300
  },
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
    height: 45,


  },
  textStyle: {
    flex:1,
    fontFamily: 'nrkis',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:15,
    color: 'white',
  }

};

export {Direction};
