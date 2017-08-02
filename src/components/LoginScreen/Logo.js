import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native'

const LOGO_SIZE = 120

export default class Logo extends Component {
  constructor(props){
    super(props)
    this.fadeAnim = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(
      this.fadeAnim,
      {
        toValue: .7,
        duration: 1000,
      }
    ).start();
  }
  render() {
    return(
      <Animated.View
        style={[styles.container, styles.position, {
          shadowOpacity: this.fadeAnim,
          shadowColor: '#000',
          shadowRadius: 20,

        }]}
        shadowOffset= {
          {width: 0,
          height: 10}
        }
        >
        <Text
          style={styles.text}
          fontVariant={'small-caps'}>
          UBER</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
