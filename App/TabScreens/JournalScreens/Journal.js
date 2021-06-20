import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

// You can import from local files
// or any pure javascript modules available in npm
// NEED TO ADD ICON FUNCTIONALITY HERE

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const {width, height} = Dimensions.get("screen")

export default function Journal({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Image
        style={styles.journalImage}
        source={require("../../../assets/journal.png")}
        onPress={() => navigation.push("JournalLog")}
      />
      <Text style={styles.title}>JOURNAL</Text>
      <TextInput
        style={styles.date}
        placeholder="   Date:  MM/DD/YYYY"
        placeholderTextColor="#484646"/>
      <TextInput style={styles.entry} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("JournalLog")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
  journalImage: {
    height: 37,
    width: 37,
    top: '11%',
    left: width*0.85,
    zIndex: 2
  },
  title: {
    top: '7.5%',
    right: '19%',
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: '200',
    textAlign: 'center',
    position: 'relative',
    fontFamily: 'Lato_400Regular'
  },
  date: {
    height: '10%',
    width: '88%',
    top: 35,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#D4ECE0',
    position: 'relative',
    alignSelf: 'center',
    fontSize: 19,
  },
  entry: {
    height: '60%',
    width: '88%',
    top: 15,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#CCE1F2',
    position: 'relative',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: "#878AA0",
    width: 150,
    height: 63,
    left: width*0.55, // 200
    bottom: 85,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  image: {
    width: 30,
    height: 30,
    bottom: height*0.01, // top: 1%
    alignSelf: 'center'
  }
});