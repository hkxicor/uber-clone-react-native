import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

const MobileInput = () => (
  <View style={styles.mobileDetails}>
    <Text style={styles.country}>IND</Text>
    <Text style={styles.country}>+91</Text>
    <TextInput
      style={styles.mobileNumberInput}
      placeholder="Enter your mobile number"
      value={""} />
  </View>
)

const styles = StyleSheet.create({
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
})

export default MobileInput
