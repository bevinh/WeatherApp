/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
let Main = require('./components/Main');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
});
export default class weather extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
        title: 'GWeather',
        component: Main
      }} />
    );
  }
}



AppRegistry.registerComponent('weather', () => weather);
