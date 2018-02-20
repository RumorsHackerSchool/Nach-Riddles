import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  Dimensions
} from 'react-native'
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props)
    this.state = {
      userAnswer: '',
      count: 0,
      resetCount: 0,
      diamonds: 0,
      urldatabase: {},
      wordsnumber: 0,
      riddleletter: ''
    }
  }
  checkBeginning() {
    if (this.state.count !== 0) {
      return 'המשך'
    } else {
      return 'שחק'
    }
  }

  onChangeCount(newCount) {
    this.setState({
      count: newCount
    })
  }

  componentWillMount() {
    AsyncStorage.getItem('count')
      .then(value => {
        this.setState({ count: JSON.parse(value) || 0 })
      })
      .done()
  }

  saveData() {
    AsyncStorage.setItem('count', String(this.state.count))
  }

  restartGame() {
    this.setState({
      userAnswer: '',
      count: 0,
      diamonds: 0,
      urldatabase: {},
      wordsnumber: 0,
      riddleletter: ''
    })
  }

  reset() {
    this.props.navigation.state.params.riddles(
      this.state.count - this.state.count
    )
  }

  render() {
    const { navigate } = this.props.navigation
    let width = Dimensions.get('window').width
    let font = width / 10
    console.log(font)
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require('../img/opening-img2.jpg')}
          >
            <View style={styles.backdropView}>
              <Text
                style={{
                  paddingTop: 20,
                  fontFamily: 'stam1',
                  textAlign: 'center',
                  color: '#2196F3',
                  fontSize: font
                }}
              >
                אביעה חידות מני קדם
              </Text>
              <Image
                style={{ width: 360, height: 165, resizeMode: 'stretch' }}
                source={require('../img/Book.png')}
              />
              <Text style={styles.lineText}>1188 חידות על הנביא</Text>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Riddles', {
                      home: this.onChangeCount.bind(this)
                    })}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>
                      {this.checkBeginning()}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Introduction')}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>הוראות</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('About')}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>אודות</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
<<<<<<< HEAD
                  onPress={() => this.reset()}
=======
                  onPress={() => navigate('Riddles',  { resetCount: this.state.resetCount })}
>>>>>>> 3247ef6bbe3e5a3f2ddc5990262d2838b3005c35
                >
                  <Text style={styles.buttonText}
                  >
                    איפוס
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    alignItems: 'center'
  },
  titleText: {
    paddingTop: 20,
    fontFamily: 'stam1',
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 60
  },
  lineText: {
    fontFamily: 'nrkis',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20
  },
  buttonView: {
    alignItems: 'center'
  },
  button: {
    marginBottom: 5,
    width: 220,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    position: 'relative',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 45,
    padding: 1,
    color: 'white',
    fontFamily: 'nrkis',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
