import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../contants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        borderColor:Colors.accent500,
        padding: 24, 
        margin: 24, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 8
    }, 
    numberText:{
        fontFamily: 'open-sans-bold', 
        color: Colors.accent500, 
        fontSize: 24, 
        fontWeight: 'bold', 

    }
})