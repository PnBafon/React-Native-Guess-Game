import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Title from "../component/ui/Title";
import Colors from "../contants/Colors";
import PrimaryButton from "../component/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={styles.hightlight}>{userNumber}</Text>
      </Text>

      <PrimaryButton onPress={onStartNewGame} style={{marginVertical: 24}}> Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: 'open-sans', 
    fontSize: 24,
    textAlign: 'center'

  }, 
  hightlight: {
    fontFamily: 'open-sans-bold', 
    color: Colors.primary500
  }
});
