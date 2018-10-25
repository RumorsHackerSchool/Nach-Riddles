import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';

export default class ComponentLevels extends Component {
  render() {
    return (

        <View>
          <View>
            <Text style={styles.titleText}>שלבים</Text>
            </View>

          <View style={styles.buttonView}>
            <Button
              onPress={this.changeColor}
              title="ספר יהושע"
              color='skyblue'
            />
            </View>
            <View style={styles.buttonView}>
              <Button
                onPress={this.changeColor}
                title="ספר שופטים"
                color='#D3D3D3'
              />
              </View>
              <View style={styles.buttonView}>
                <Button
                  onPress={this.changeColor}
                  title="ספר שמואל"
                  color='#D3D3D3'
                />
                </View>
                <View style={styles.buttonView}>
                  <Button
                    onPress={this.changeColor}
                    title="ספר מלכים"
                    color='#D3D3D3'
                  />
                  </View>
                  <View style={styles.buttonView}>
                    <Button
                      onPress={this.changeColor}
                      title="ספר דניאל"
                      color='#D3D3D3'
                    />
                    </View>
          </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    height:600,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  titleView: {
    height:10,
    width:360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  titleText: {
    height:60,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: 'steelblue',
  },
  buttonView: {
    textAlign: 'center',
    justifyContent: 'center',
    height: 45,
    width: 360,

  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ComponentLevels', () => ComponentLevels);
