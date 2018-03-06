import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'

class RiddleSectionsHeader2 extends Component {
  parallel() {
    this.refs.modalParallel.open()
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Modal
          style={[styles.modal, styles.modalParallel]}
          position={'center'}
          ref={'modalParallel'}
        />
        <TouchableOpacity onPress={() => this.parallel()}>
          <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#472747',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin: 0,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'nrkis',
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalParallel: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    height: 200
  }
}

export { RiddleSectionsHeader2 }
