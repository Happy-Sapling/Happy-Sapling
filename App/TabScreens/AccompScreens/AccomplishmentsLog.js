import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Dimensions,
  TextInput } from 'react-native';

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const {width, height} = Dimensions.get("screen")

export default function Accomplishments({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCOMPLISHMENTS  LOG</Text>

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
}}

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
    fontSize:28,
    color: "#0D0D0D",
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Lato_400Regular',
    left: -9,
    top: 10
  },
   textBox:{
    paddingHorizontal: 20,
    fontSize: 20,
    color:"#474747",
    fontFamily: 'Lato_400Regular',
    top: 9
  },
  selectDate:{
    backgroundColor:"#CACACA",
    borderRadius:20,
    width: width*.89,
    height: height *.095,
    alignSelf:"center",
    marginBottom:45,
    marginTop: 20,
    paddingVertical:22,
    top: '3%'
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
