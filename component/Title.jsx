import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#ddb52f', 
        textAlign: 'center', 
        borderWidth: 2, 
        borderColor: '#ddb52f', 
        padding: 16
    }
})