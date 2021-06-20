import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <Text style={styles.title}>ACCOMPLISHMENTS</Text>
      <View>
        <Text style={styles.subtitle}>
          Of the Day
        </Text>
      </View>
      <View style={styles.trophy}>
        <Ionicons name="trophy" size={32} color="black" onPress={() => navigation.push("AccomplishmentsLog")}/>
      </View>

        <View style={styles.red}>
          <TextInput style={styles.textBox}
            bluronSubmit={false}
            placeholder="Insert Text Here"
            placeholderTextColor="#474747"/>
        </View>

        <View style={styles.orange}>
        <TextInput style={styles.textBox}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"/>
        </View>

        <View style={styles.yellow}>
        <TextInput style={styles.textBox}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"/>
        </View>

        <View style={styles.green}>
        <TextInput style={styles.textBox}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"/>
        </View>

        <View style={styles.blue}>
        <TextInput style={styles.textBox}
          bluronSubmit={false}
          placeholder="Insert Text Here"
          placeholderTextColor="#474747"/>
        </View> 

        <TouchableOpacity>
        <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
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
  },
  title: {
    fontSize: 29,
    color: "#0D0D0D",
    textAlign: 'left',
    paddingHorizontal: 20,
    fontFamily: 'Lato_400Regular'
  },
  subtitle:{
    top: 10,
    color:"#484646",
    fontSize: 20,
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical:4,
    marginBottom:30,
    fontFamily: 'Lato_400Regular'
  },
   textBox:{
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    top: 10,
    left: 3
  },
  red:{
    backgroundColor:"#F5CDDE",
    borderRadius:20,
    width: width*.9,
    height: height *.1,
    alignSelf:"center",
    marginBottom:14,
    paddingVertical:22
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
  submit:{
    marginTop:8,      
    alignSelf:"center",
    textAlign:"center",
    textAlignVertical:"center",
    width:width*0.43,
    height:height*0.073,
    backgroundColor:"#CACACA",
    borderRadius:15,
    fontSize:21,
    color: "#474747",
    fontFamily: 'Lato_400Regular'
  },
  trophy:{
    margin: 10,
    padding: 5,
    position: 'absolute',
    top: height*0.065,
    right: width*0.04,
    zIndex: 2
  }
});