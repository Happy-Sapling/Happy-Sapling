import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

// You can import from local files
// or any pure javascript modules available in npm

const {width, height} = Dimensions.get("screen")

export default function Journal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      <TextInput
        style={styles.date}
        placeholder="   Date:  MM/DD/YYYY"
        placeholderTextColor="#484646"/>
      <TextInput style={styles.entry} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("JournalLog")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require("../../../assets/nav_bar.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
  title: {
    top: '4%',
    right: '22%',
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
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
    height: '40%',
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
    left: width*0.475, // 200
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