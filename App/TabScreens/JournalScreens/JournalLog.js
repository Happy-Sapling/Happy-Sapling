import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, Dimensions } from 'react-native';

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const {width, height} = Dimensions.get("screen")

// NEED TO ADD NAVIGATION FUNCTIONALITY TO ICON

export default function JournalLog({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JOURNAL LOG</Text>
      <TextInput
        style={styles.date}
        placeholder="   Select Date"
        placeholderTextColor="#484646"
      />
      <View style={styles.entryBackground}>
        <Text style={styles.entryText}>My Journal Log</Text>
      </View>
      <Image style={styles.image} source={require('../../../assets/go_back.png')} />
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
  title: {
    top: '8%',
    right: '7.5%',
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: '200',
    textAlign: 'center',
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Lato_400Regular'
  },
  date: {
    height: '10%',
    width: '87%',
    top: height*0.06,   // 35
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#CACACA',
    position: 'relative',
    alignSelf: 'center',
    fontSize: 19,
  },
  entryBackground: {
    height: '50%',
    width: '88%',
    top: 33,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F2D5CC',
    position: 'relative',
    alignSelf: 'center',
  },
  entryText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 19,
    color: "#474747",
    margin: 15,
    paddingTop: 3
  },
  image: {
    width: 23,
    height: 23,
    right: "-7%",
    bottom: height*0.73,  // 74%
  }
});
