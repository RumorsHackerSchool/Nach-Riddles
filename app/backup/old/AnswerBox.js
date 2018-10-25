import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


class AnswerBox extends Component{

    render(){
    const answer = this.props.headerText;
    const answerlen =  answer.length;
    let test = [];
    for (let i = 0; i < answerlen; i++) {
        test.push(
            <TouchableOpacity style={styles.boxStyle} key={i}>
            </TouchableOpacity>
        );
      }
    return(
      <View style={styles.viewStyle}>{test}</View>
    )
  }
};

const styles = {
  viewStyle:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    height: 80,
    borderWidth: 0,
    position: 'relative'
  },
  textStyle: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'steelblue',
    textAlign: 'center',
  },
  boxStyle: {
    borderWidth: 2,
    borderColor: 'blue',
    margin: 2,
    padding:10,

  }
};

export {AnswerBox};
