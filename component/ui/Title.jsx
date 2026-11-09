import { StyleSheet, Text, Platform } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold', 
    fontSize: 18,
    color: 'white',
    textAlign: "center",
    borderWidth: Platform.select({ios: 0, android: 2}),
    // borderWidth: Platform.OS === 'android' && 2,
    borderColor: 'white',
    padding: 16,
    maxWidth: '80%', 
    width: 300
  },
});
