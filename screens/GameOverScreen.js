import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red"
  }
});

export default GameOverScreen;
