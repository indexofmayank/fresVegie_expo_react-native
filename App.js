// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './AppNavigator';



export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
