import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

// You can import from local files
import sun from './assets/sun.png';

// or any pure javascript modules available in npm

const { width, height } = Dimensions.get("screen");

export default function Home({ navigation }) {
  return (
   <View style={styles.container}>

        <Text style={styles.quote}>“Give yourself the same care and attention that you give to others and watch yourself bloom.”</Text>

        <View style={styles.bigCircle}></View>
        <View style={styles.mediumCircle}></View>
        <View style={styles.semiMediumCircle}></View>
        <View style={styles.smallCircle}></View>

        <Image style={styles.sun1} source={sun} />
        <Image style={styles.sun2} source={sun} />

        <Text style={styles.text}>Streak: 10 days</Text>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  quote: {
    top: "13%",
    width: width*0.8,
    margin: 15,
    padding: 15,
    fontSize: 17.5,
    textAlign: "center",
    flex: 1,
  },
  bigCircle: {
    width: width*0.8,
    height: width*0.8,
    backgroundColor: '#88B49C',
    borderRadius: '160%',
    position: 'absolute'
  },
  mediumCircle: {
    width: width*0.67,
    height: width*0.67,
    backgroundColor: '#99BFAA',
    borderRadius: '130%',
    position: 'absolute'
  },
  semiMediumCircle: {
    width: width*0.55,
    height: width*0.55,
    backgroundColor: '#AED1BE',
    borderRadius: '110%',
    position: 'absolute'
  },
  smallCircle: {
    width: width*0.4,
    height: width*0.4,
    backgroundColor: '#C5E0D1',
    borderRadius: '100%',
    position: 'absolute'
  },
  sun1: {
    width: 38,
    height: 38,
    position: 'absolute',
    left: width*0.18,
    top: '42%'
  },
  sun2: {
    width: 38,
    height: 38,
    position: 'absolute',
    left: width*0.72,
  },
  text: {
    zIndex: 2,
    fontSize: 20,
    bottom: '15%'
  }
});