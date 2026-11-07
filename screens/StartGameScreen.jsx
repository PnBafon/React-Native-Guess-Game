import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../component/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput /> 

      {/* buttons */}
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
     inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16, 
        backgroundColor: '#72063c', 
        borderRadius: 8,
        elevation: 4, 
        shadowColor: 'black',
        shadowOffset: {width:0, height:2}, 
        shadowRadius: 6,
        shadowOpacity:0.25,
    }
})