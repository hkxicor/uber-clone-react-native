import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import MobileInput from './MobileInput'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const DrawerHeight = SCREEN_HEIGHT/2
export default class LoginPart extends Component{
  constructor(){
    super()
    this.factor = new Animated.Value(160)
    this._onPress = this._onPress.bind(this)
  }
  componentDidMount(){

  }
  _onPress(){
    Animated.spring(
      this.factor,
      {
        toValue: -SCREEN_HEIGHT/2 + 80,
      }
    ).start();
  }
  render() {
    return(
      <Animated.View style={[styles.container,{
        top: this.factor,
      }]}>
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.partitionUp}>
          <Text style={styles.text}>Get moving with Uber</Text>
          <MobileInput />
        </View>
        <View style={styles.lineSeprator}></View>
        <View style={styles.partitionUp}>
          <Text style={styles.smallText}>Or connect with social</Text>
        </View>
      </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '300',
    fontSize:23,
    color: '#222',
  },
  partitionUp: {
    padding:30,
  },
  lineSeprator: {
    borderColor: '#777',
    borderWidth: .3,
    marginTop: 50,
  },
  smallText:{
    color: '#292ec4',
  }

})
