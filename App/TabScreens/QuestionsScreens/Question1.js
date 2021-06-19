import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Question1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {" "}
        Pick one colour to describe your current mood:
      </Text>
      <View style={styles.eachRow}>
        <TouchableOpacity
          style={styles.boxPink}
          onPress={() => navigation.push("Question2")}
        />

        <TouchableOpacity
          style={styles.boxOrange}
          onPress={() => navigation.push("Question2")}
        />

        <TouchableOpacity
          style={styles.boxBlue}
          onPress={() => navigation.push("Question2")}
        />
      </View>
      <View style={styles.eachRow}>
        <TouchableOpacity
          style={styles.boxBlack}
          onPress={() => navigation.push("Question2")}
        />

        <TouchableOpacity
          style={styles.boxGray}
          onPress={() => navigation.push("Question2")}
        />

        <TouchableOpacity
          style={styles.boxPurple}
          onPress={() => navigation.push("Question2")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#f5f5f5",
    padding: 8,
  },
  title: {
    textAlign: "center",
    marginTop: -10,
    marginBottom: 15,
    fontSize: 24,
  },
  boxPink: {
    width: 60,
    height: 60,
    marginVertical: 20,
    borderRadius: 17,
    backgroundColor: "#E3AEAE",
  },

  boxBlack: {
    width: 60,
    height: 60,
    borderRadius: 17,
    backgroundColor: "#000000",
  },

  boxOrange: {
    width: 60,
    height: 60,
    marginLeft: 30,
    marginVertical: 20,
    borderRadius: 17,
    backgroundColor: "#FF9736",
  },

  boxGray: {
    width: 60,
    height: 60,
    marginLeft: 30,
    borderRadius: 17,
    backgroundColor: "#E3E0E0",
  },

  boxBlue: {
    width: 60,
    height: 60,
    marginLeft: 30,
    marginVertical: 20,
    borderRadius: 17,
    backgroundColor: "#CAF1EF",
  },

  boxPurple: {
    width: 60,
    height: 60,
    marginLeft: 30,
    borderRadius: 17,
    backgroundColor: "#B2BAFF",
  },

  eachRow: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
