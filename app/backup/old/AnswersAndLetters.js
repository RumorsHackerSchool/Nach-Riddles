import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


class AnswersAndLetters extends Component{
  constructor(){
      super();
      this.state = {
          AnswerValue:''
      }
  }
// function from LettersBox components
onClick(letter, test) {
  console.log(letter);
  test.push(letter);
  console.log(test.join(''));
  this.setState({
      AnswerValue: test.join('')
  })

}



    render(){
      //scripts from Letter components
      //this is script for making new string of the answer and random letters
      //the string is putting in the boxes in random way
      console.log("checkthis " +this.props.LettersBoxHeader)
      let LettersBoxHeader = this.props.LettersBoxHeader;
      console.log("check again " + LettersBoxHeader)
      let randomNum;
      var str = "אבגדהוזחטיכלמנסעפצקרשת";
      var res = '';
      let LoopNum = 14-LettersBoxHeader.length; //for making 14 letters to guess

      for (let i = 0; i < LoopNum; i++) {
          let randomNum = Math.floor(Math.random() * 22)
          LettersBoxHeader += str.charAt(randomNum)
          console.log(i)
        }
      console.log('answer is 14' + LettersBoxHeader.length)
      let LettersBoxHeaderLen = LettersBoxHeader.length;
      let mixingLetters = []
      for (let i = 0; i < LettersBoxHeaderLen; i++) {
          let randomNum = Math.floor(Math.random() * LettersBoxHeaderLen)
          if (mixingLetters.indexOf(randomNum) >= 0) {
            i--
            continue
          } else {
            mixingLetters.push(randomNum)
          }
        }

      let LettersBoxes = [];
      var test = [];
      for (let i = 0; i < LettersBoxHeaderLen; i++) {
        console.log(test)
          let letter = LettersBoxHeader[mixingLetters[i]]
          console.log('check',letter)
          LettersBoxes.push(
              <TouchableOpacity onPress={() => this.onClick(letter, test)} style={styles.LettersBoxStyle} key={i}>
                <Image
                  source={require('../../img/parchment3.gif')}
                  style={{width: 40, height: 40, alignItems: 'center'}}
                  >
                  <View>
                    <Text
                      style={{fontSize:28, fontWeight: 'bold',}}
                      letter={letter}>{letter}</Text>
                  </View>
                </Image>
              </TouchableOpacity>
          );
        }





    //scripts for answer boxes
    const AnswerBoxHeader = this.props.AnswerBoxHeader;
    const AnswerBoxHeaderLen =  AnswerBoxHeader.length;
    let AnswerBoxes = [];
    for (let i = 0; i < AnswerBoxHeaderLen; i++) {
        AnswerBoxes.push(
            <TouchableOpacity style={styles.AnswerBoxStyle} key={i}>
            </TouchableOpacity>
        );
      }
    return(
      <View>
        <View style={styles.AnswerViewStyle}>
        {AnswerBoxes}
        </View>
        <View style={styles.LettersViewStyle}>
        {LettersBoxes}
        </View>
      </View>
    )
  }
};

const styles = {
  AnswerViewStyle:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    height: 80,
    borderWidth: 0,
    position: 'relative'
  },
  AnswerTextStyle: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'steelblue',
    textAlign: 'center',
  },
  AnswerBoxStyle: {
    borderWidth: 2,
    borderColor: 'blue',
    margin: 2,
    padding:10,
  },
    LettersViewStyle:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems:'center',
      justifyContent:'center',
      height: 96,
      borderWidth: 0,
      position: 'relative'
    },
    LettersTextStyle: {
      fontSize:30,
      fontWeight: 'bold',
      color: 'steelblue',
      textAlign: 'center',
    },
    LettersBoxStyle: {
      borderWidth: 2,
      borderColor: 'blue',
      margin: 1,
      padding:0,

    }
  };


export {AnswersAndLetters};
