import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native'

const LOGO_SIZE = 120

export default class Logo extends Component{
  constructor(){
    super()

  }

  render() {
    return(
      <View
        style={[styles.container, styles.position]}
        shadowColor="#000"
        shadowOffset={{
          width: 0,
          height:10
        }}
        shadowOpacity={.6}
        shadowRadius={10}
        >
        <Text
          style={styles.text}
          fontVariant={'small-caps'}>
          UBER</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontWeight: '600',
    fontSize:20,
    color: '#222',

  },
  position:{
    marginLeft: Dimensions.get('window').width/2 - LOGO_SIZE/2,
    marginTop: LOGO_SIZE*1
  }
})
