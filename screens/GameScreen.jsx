import { StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../component/ui/Title";
import NumberContainer from "../component/game/NumberContainer";
import PrimaryButton from "../component/ui/PrimaryButton";
import Card from "../component/ui/Card";
import InstructionText from "../component/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(()=>{
    if(currentGuess === userNumber) {
        onGameOver()
    }
  }, [currentGuess, userNumber])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", {
        text: "Sorry!",
        style: "cancle",
      });
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Guess High or Low?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </Card>

      <View>
        <Text>LOG Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
