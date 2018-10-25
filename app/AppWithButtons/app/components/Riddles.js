import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Header, RiddleHeader, RiddleSectionsHeader1, RiddleSectionsHeader2, RiddleSections, RiddleBox, AnswerBox, LettersBox, AnswersAndLetters, Button, Spinner } from './common';
import database from '../database/riddles-testing-file';
import axios from 'axios';

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }
  state = { urldatabase: [] };
  componentWillMount(){
    axios.get('https://zwerd.com/NachRiddles/database/riddles-testing-file.html')
      .then(response => this.setState({urldatabase: response.data}));
  }


  render() {
    let data = this.state.urldatabase
    const data2 = [{key1:"this is key1", key2:"this is key2"},{key10:"this is key10", key20:"this is key20"}]
    let num = 0;


    const book = database[num].book
    const riddle_section = database[num].riddle_section
    const parallel = database[num].parallel
    const riddle_number = database[num].riddle_number
    let riddle = database[num].riddle;
    let answer = database[num].answer;

      return (
      <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../img/riddle.jpg')}
      >
        <View style={styles.backdropView}>
                <RiddleHeader headerText={book} />
                <View style={styles.viewFlex}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <RiddleSectionsHeader2 headerText={riddle_section} />
                    <RiddleSectionsHeader1 headerText={parallel} />
                    <RiddleSectionsHeader1 headerText={"חידה מספר\n" + riddle_number} />
                  </View>
                </View>
                <RiddleBox headerText={riddle}/>
                <Image
                  style={{ width: 360, height: 165, justifyContent: 'center'}}
                  source={require('../img/scroll.png')}>
                    <AnswerBox headerText={answer}/>
                </Image>
                <LettersBox headerText={answer}/>
        </View>
      </Image>
      </View>
    )
  }
  }

  const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null,
  },
  backdropView: {
    flex:1,
    backgroundColor: 'rgba(255,255,255, 0.8)'
  },
  titleText: {
    fontFamily: 'stam',
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 50,
  },
  viewFlex: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  titleText: {
    height: 40,
    width: 120,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'steelblue'
  },
  titleText2: {

    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
  imageView: {
    paddingTop:0,
    paddingBottom:0 ,
    width: 360,
    height: 300,
  },
  titleText3: {
    paddingTop:100 ,
    paddingBottom:130 ,
    includeFontPadding: true,
    backgroundColor: 'rgba(135,206,235, 0.4)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  }
  })


















/*
        <View>
            <RiddleHeader headerText={book} />
            <View style={styles.viewFlex}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RiddleSectionsHeader headerText={riddle_section} />
                <RiddleSectionsHeader headerText={parallel} />
                <RiddleSectionsHeader headerText={"חידה מספר" + riddle_number} />
              </View>
            </View>
            <RiddleBox headerText={riddle}/>
            <AnswerBox headerText={answer}/>
            <LettersBox headerText={answer}/>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(0,255,0,0)',
    alignItems: 'center',
  },
  viewFlex: {
    height: 60,
  },
  titleText: {
    height: 40,
    width: 120,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'steelblue'
  },
  titleText2: {

    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
  imageView: {
    paddingTop:0,
    paddingBottom:0 ,
    width: 360,
    height: 300,
  },
  titleText3: {
    paddingTop:100 ,
    paddingBottom:130 ,
    includeFontPadding: true,
    backgroundColor: 'rgba(135,206,235, 0.4)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  }

})
*/
// skip this line if using Create React Native App
AppRegistry.registerComponent('Riddles', () => Riddles)
