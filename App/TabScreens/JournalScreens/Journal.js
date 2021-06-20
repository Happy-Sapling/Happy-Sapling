import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Journal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Journal Screen</Text>
      <Button title="Submit Entry" onPress={() => alert("todo!")} />
      <Button
        title="Journal Log"
        onPress={() => navigation.push("JournalLog")}
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
