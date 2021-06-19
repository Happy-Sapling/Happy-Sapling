/* import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Question3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Question3 Screen</Text>
      <Button title="Submit Entry" onPress={() => alert("todo!")} />
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
}); */

import * as React from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity
  } from 'react-native';

const {width, height} = Dimensions.get("screen")


export default function Question3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is one goal you</Text>
      <Text style={styles.title}>would like to</Text>
      <Text style={styles.title}>accomplish today?</Text>
      <View style={styles.box}>
        <View style={styles.submitButton}>
          <TouchableOpacity onPress={() => alert("todo!")}>
            <Text style={styles.textSubmit}>Submit Entry</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text/>
        <TextInput style={styles.words}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"/>
      </View>
      
    </View>

    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: "10%",
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  title: {
    flexDirection:"row",
    textAlign: 'center',
    fontSize: 30,
  },
  box:{
    backgroundColor:"#D4ECE0",
    height: height *0.56,
    borderRadius:20,
    marginHorizontal: width *0.07,
    marginTop:height*.04
  },
  submitButton:{
    marginLeft: width * .472,
    marginTop: height * .46,
    width: width*.3,
    height:height *0.07,
    borderRadius:20,
    backgroundColor: "#878AA0",
  },
  textSubmit:{
    textAlign:"center",
    color:"#F4F1DE",
    paddingVertical:height *.022
  },
  words:{
    marginTop:-height * .54,
    marginHorizontal: width *0.12,

  }
});