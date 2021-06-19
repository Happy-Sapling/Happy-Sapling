/* import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Accomplishments({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Accomplishments Log Screen</Text>
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
  Dimensions,
  TextInput } from 'react-native';

const {width, height} = Dimensions.get("screen")

export default function Accomplishments({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCOMPLISHMENTS</Text>
      <Text style={styles.title}>LOG</Text>

      <View style={styles.selectDate}>
          <Text style={styles.textBox}>Select Date</Text>
        </View>

        <View style={styles.red}>
          <Text style={styles.textBox}>Show Accomplishment</Text>
        </View>

        <View style={styles.orange}>
        <Text style={styles.textBox}>Show Accomplishment</Text>
        </View>

        <View style={styles.yellow}>
        <Text style={styles.textBox}>Show Accomplishment</Text>
        </View>

        <View style={styles.green}>
        <Text style={styles.textBox}>Show Accomplishment</Text>
        </View>

        <View style={styles.blue}>
        <Text style={styles.textBox}>Show Accomplishment</Text>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: "10%",
    backgroundColor: '#e5e5e5',
    padding: 8,
    marginTop:-10
  },
  title: {
    fontSize: 25,
    color: "0D0D0D",
    textAlign: 'center',
    paddingHorizontal: 20,
  },
   textBox:{
    paddingHorizontal: 20,
    fontSize: 20,
    color:"#474747",
  },
  selectDate:{
    backgroundColor:"#CACACA",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:50,
    marginTop: 20,
    paddingVertical:22
  },
  red:{
    backgroundColor:"#F5CDDE",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22,
  },

  orange:{
    backgroundColor:"#F9DED7",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22
  },

  yellow:{
    backgroundColor:"#FBF7D5",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22
  },

  green:{
    backgroundColor:"#D4ECE0",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22
  },

  blue:{
    backgroundColor:"#CCE1F2",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22
  },
});
