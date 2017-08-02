import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Logo from '../components/LoginScreen/Logo'
import LoginPart from '../components/LoginScreen/LoginPart'

class LoginScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <LoginPart />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0D9397'
  }
})

export default LoginScreen
