import React, {Component} from 'react';
import { Text, View } from 'react-native';


class RiddleSections extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <View style={styles.mainView}>
          <View style={styles.bookStyle} >
            <Text style={styles.textStyle}>check</Text>
          </View>
          <View style={styles.riddle_sectionStyle} >
            <Text style={styles.textStyle}>{this.props.riddle_sectionText}</Text>
          </View>
          <View style={styles.parallelStyle} >
            <Text style={styles.textStyle}>{this.props.parallelText}</Text>
          </View>
        </View>
      </View>
    )
  }
};

const styles = {
  viewStyle:{
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent:'center',
    height: 80,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  mainView:{
    height:800,
    flex:1,
    flexDirection: 'row'
  },
  bookStyle:{
    flex:1,
    backgroundColor: 'powderblue'
  },
  riddle_sectionStyle:{
    flex:1,
    backgroundColor: 'skyblue'
  },
  parallelStyle:{
    flex:1,
    backgroundColor: 'steelblue'
  },
  textStyle: {
    fontSize:43,
    color: '#ffffff',
  }

};

export {RiddleSections};
