import { View, Text, Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

export default function ButtonStyled({ type }) {
  const backgroundColor = type == "primary" ? "black" : "white";
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}>
        <Text style={styles.buttonText}>something</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "80%",
    position: "absolute",
  },
  button: {
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold",
  },
});
