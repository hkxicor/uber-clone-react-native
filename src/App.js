import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

import LoginScreen from './containers/LoginScreen'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
