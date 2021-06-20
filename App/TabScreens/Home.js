import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

// removed sun import
// or any pure javascript modules available in npm

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const { width, height } = Dimensions.get("screen");

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.quote}>
          “Give yourself the same care and attention that you give to others and
          watch yourself bloom.”
        </Text>

        <View style={styles.bigCircle}></View>
        <View style={styles.mediumCircle}></View>
        <View style={styles.semiMediumCircle}></View>
        <View style={styles.smallCircle}></View>

        <Image style={styles.sun1} source={require("../../assets/sun.png")} />
        <Image style={styles.sun2} source={require("../../assets/sun.png")} />
        <Image style={styles.sun3} source={require("../../assets/sun.png")} />

        <Image style={styles.tree} source={require("../../assets/tree6.png")} />

        <Text style={styles.text}>Streak: 10 days</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  quote: {
    top: "12%",
    width: width * 0.8,
    margin: 15,
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    fontFamily: "Lato_400Regular",
  },
  bigCircle: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: "#88B49C",
    borderRadius: 180, // 160%
    position: "absolute",
    top: "32%",
  },
  mediumCircle: {
    width: width * 0.67,
    height: width * 0.67,
    backgroundColor: "#99BFAA",
    borderRadius: 150, // 130%
    position: "absolute",
    top: "36%",
  },
  semiMediumCircle: {
    width: width * 0.55,
    height: width * 0.55,
    backgroundColor: "#AED1BE",
    borderRadius: 120, //110%
    position: "absolute",
    top: "39%",
  },
  smallCircle: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: "#C5E0D1",
    borderRadius: 115, // 100%
    position: "absolute",
    top: "43%",
  },
  sun1: {
    width: 38,
    height: 38,
    position: "absolute",
    left: width * 0.18,
    top: "42%",
  },
  sun2: {
    width: 38,
    height: 38,
    position: "absolute",
    left: width * 0.75,
  },
  sun3: {
    width: 36,
    height: 36,
    position: "absolute",
    left: width * 0.5,
    bottom: 180,
  },
  tree: {
    width: 400,
    height: 180,
    position: "absolute",
    left: width * -0.3,
    bottom: 205,
    zIndex: 3,
  },
  text: {
    zIndex: 2,
    fontSize: 22,
    bottom: "10%",
    fontFamily: "Lato_400Regular",
    fontWeight: "900",
  },
});
