import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


class LettersBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: {
        א: true,
        ב: true,
        ג: true,
        ד: true,
        ה: true,
        ו: true,
        ז: true,
        ח: true,
        ט: true,
        י: true,
        כ: true,
        ל: true,
        מ: true,
        נ: true,
        ס: true,
        ע: true,
        פ: true,
        צ: true,
        ק: true,
        ר: true,
        ש: true,
        ת: true,
      }
    };
}

  onClick = (letter) => {
    this.setState({
      letters: {
       [letter]: !this.state.letters[letter]
      }
    })
  }

/*
  onClick(letter, index, answerLetter) {
    console.log(letter);
    answerLetter.push(letter);
    console.log(answerLetter.join(''));


  }
*/
    render(){
    //this is script for making new string of the answer and random letters
    //the string is putting in the boxes in random way
    let answer = this.props.headerText;
    let randomNum;
    var str = "אבגדהוזחטיכלמנסעפצקרשת";
    var res = '';
    let LoopNum = 14-answer.length; //for making 14 letters to guess

    for (let i = 0; i < LoopNum; i++) {
        let randomNum = Math.floor(Math.random() * 22)
        answer += str.charAt(randomNum)
        console.log(i)
      }
    console.log('answer is 14' + answer.length)
    let answerlen = answer.length;
    let mixingLetters = []
    for (let i = 0; i < answerlen; i++) {
        let randomNum = Math.floor(Math.random() * answerlen)
        if (mixingLetters.indexOf(randomNum) >= 0) {
          i--
          continue
        } else {
          mixingLetters.push(randomNum)
        }
      }


    /*var res = str.split("")
    var letter = "ת";
    var letterPosition = res.indexOf(letter)+1;
    ranNums.next().value;*/
    console.log(mixingLetters)
    console.log(answer)
    let LettersBoxes = [];
    var answerLetter = [];
    for (let i = 0; i < answerlen; i++) {
      console.log(answerLetter)
        let letter = answer[mixingLetters[i]]
        console.log('check',letter)
        LettersBoxes.push(letter)
    }
    console.log(mixingLetters)


    const button = Object.keys(this.state.letters).map((letter, index) => {
      if (this.state.letters[letter]) {
        return (
      <TouchableOpacity onPress={() => this.onClick(letter)} style={styles.boxStyle} key={index}>
        <Image
          source={require('../../img/parchment3.gif')}
          style={{width: 40, height: 40, alignItems: 'center'}}
          >
          <View>
            <Text
              style={{fontSize:28, fontWeight: 'bold',}}>
              {letter}
            </Text>
          </View>
        </Image>
      </TouchableOpacity>
    )
  } else {
      return (
        <TouchableOpacity onPress={() => this.onClick(letter)} style={styles.boxStyle} key={index}>
          <Image
            source={require('../../img/parchment3.gif')}
            style={{width: 40, height: 40, alignItems: 'center'}}
            >
            <View>
              <Text
                style={{fontSize:28, fontWeight: 'bold',}}>
              </Text>
            </View>
          </Image>
        </TouchableOpacity>
      )
    }
  });

/*  for (let i = 0; i < answerlen; i++) {
      console.log(test)
        let letter = answer[mixingLetters[i]]
        console.log('check',letter)
        LettersBoxes.push(
            <TouchableOpacity onPress={() => this.onClick(letter, test)} style={styles.boxStyle} key={i}>
              <Image
                source={require('../../img/parchment3.gif')}
                style={{width: 40, height: 40, alignItems: 'center'}}
                >
                <View>
                  <Text
                    style={{fontSize:28, fontWeight: 'bold',}}>
                    {letter}
                  </Text>
                </View>
              </Image>
            </TouchableOpacity>
        );
      }*/
    return(
      <View style={styles.viewStyle}>{button}</View>
    )
  }
};
const styles = {
  viewStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center',
    height: 96,
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
    margin: 1,
    padding:0,

  }
};

export {LettersBox};
