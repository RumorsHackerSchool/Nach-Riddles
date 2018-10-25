import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  Button
} from 'react-native'

export default class ComponentRiddles extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.titleText}>מקבילה ל-בראשית</Text>
          <Text style={styles.titleText}>פרשת יהושע</Text>
          <Text style={styles.titleText}>ספר יהושע</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.titleText2}>חידה א</Text>
        </View>
        <View>
          <Text style={styles.titleText3}>
            את מה נשאו הכהנים כשבתוך הירדן היו עומדים
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    height: 45,
    width: 120,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'steelblue'
  },
  titleText2: {
    height: 45,
    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
  titleText3: {
    height: 45,
    width: 360,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('ComponentRiddles', () => ComponentRiddles)
