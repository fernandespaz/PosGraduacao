import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
const imgDone = require('../assets/icon-done-light.png');

export default class DoneTasks extends Component {
  render() {
    return <View style={styles.conteiner} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
  img: {
    width: 50,
    height: 50,
  },
});
