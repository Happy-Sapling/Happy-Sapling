import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Meditate({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meditate Screen</Text>
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
