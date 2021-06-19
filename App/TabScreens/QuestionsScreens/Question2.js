import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Question2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Question2 Screen</Text>
      <Button
        title="Submit Entry"
        onPress={() => navigation.push("Question3")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
