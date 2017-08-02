import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TextInput,
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
          <View style={styles.mobileDetails}>
            <Text style={styles.country}>IND</Text>
            <Text style={styles.country}>+91</Text>
            <TextInput
              style={styles.mobileNumberInput}
              placeholder="Enter your mobile number"
              value={""} />
          </View>
        </View>
        <View style={styles.lineSeprator}></View>
        <View style={styles.partitionUp}>
          <Text style={styles.smallText}>Or connect with social</Text>
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
  },
  mobileDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  country: {
    flex: 1,
    fontSize: 20,
    fontWeight: '400',

  },
  mobileNumberInput: {
    flex: 4,
    width: 400,
  },
  lineSeprator: {
    borderColor: '#777',
    borderWidth: .3,
    marginTop: 50,
  },
  smallText:{
    color: '#4286f4',
  }

})
