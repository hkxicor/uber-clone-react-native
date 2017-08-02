import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Himasnji</Text>
        </View>
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
