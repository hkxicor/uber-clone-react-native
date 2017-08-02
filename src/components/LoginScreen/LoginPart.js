import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native'

const DrawerHeight = Dimensions.get('window').height/2
export default class LoginPart extends Component{
  constructor(){
    super()

  }

  render() {
    return(
      <View style={[styles.container]}>
        <View style={styles.partitionUp}>
          <Text style={styles.text}>Get moving with Uber</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('window').width,
    height: DrawerHeight,
    top: Dimensions.get('window').height/2 - DrawerHeight/2,
    backgroundColor: '#fff'
  },
  text: {
    fontWeight: '300',
    fontSize:23,
    color: '#222',
  },
  partitionUp: {
    padding:30,
  }
})
