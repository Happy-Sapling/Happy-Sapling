import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  Lato_400Regular
} from "@expo-google-fonts/lato";

import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");

export default function Question3({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is one goal you would like to accomplish today?</Text>
      <View style={styles.box}>
        <View style={styles.submitButton}>
          <TouchableOpacity onPress={() => alert("todo!")}>
            <Text style={styles.textSubmit}>Submit Entry</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text />
        <TextInput
          style={styles.words}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"
        />
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#f5f5f5",
    padding: 8,
  },
  title: {
    flexDirection: "row",
    textAlign: "center",
    fontSize: 28.5,
    fontFamily: 'Lato_400Regular',
    width: width*0.83,
    alignSelf: 'center'
  },
  box: {
    backgroundColor: "#D4ECE0",
    height: height * 0.56,
    borderRadius: 20,
    marginHorizontal: width * 0.07,
    marginTop: height * 0.04,
  },
  submitButton: {
    marginLeft: width * 0.472,
    marginTop: height * 0.46,
    width: width * 0.3,
    height: height * 0.07,
    borderRadius: 20,
    backgroundColor: "#878AA0",
  },
  textSubmit: {
    textAlign: "center",
    color: "#F4F1DE",
    paddingVertical: height * 0.022,
    fontSize: 15.5
  },
  words: {
    marginTop: -height * 0.545,
    marginHorizontal: width * 0.12,
    fontSize: 18,
    marginLeft: 61
  },
});
