import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
} from "react-native";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");
const circleWidth = width * 0.6;

export default function Meditate({ navigation }) {
  const move = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(textOpacity, {
            delay: 100,
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
    const translate = move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, circleWidth / 6],
    });
    const exhale = textOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MEDITATE</Text>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
            opacity: textOpacity,
          }}
        >
          <Text style={styles.text}>Breathe In</Text>
        </Animated.View>

        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
            opacity: exhale,
          }}
        >
          <Text style={styles.text}>Breathe Out</Text>
        </Animated.View>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          const rotation = move.interpolate({
            inputRange: [0, 1],
            outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
          });
          return (
            <Animated.View
              key={item}
              style={{
                opacity: 0.1,
                backgroundColor: "#6D7CFF",
                width: circleWidth,
                height: circleWidth,
                borderRadius: circleWidth / 2,
                ...StyleSheet.absoluteFill,
                transform: [
                  {
                    rotateZ: rotation,
                  },
                  { translateX: translate },
                  { translateY: translate },
                ],
              }}
            ></Animated.View>
          );
        })}
        <View style={styles.timerContainer}>
          <Image
            style={styles.timerButton}
            source={require("../../assets/timerOutline.png")}
          />
          <Text style={styles.timerText}>1 0 : 0 0</Text>
        </View>
      </View>
    );
  }
}

// Animated.timing(this.state.posY).stop();
// https://stackoverflow.com/questions/42149793/how-to-stop-a-looping-animation-in-react-native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    left: "20%",
    top: "38%",
  },
  title: {
    top: "-100%",
    right: 70,
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontFamily: "Lato_400Regular",
    alignItems: "center",
  },
  text: {
    fontSize: 19,
  },
  timerContainer: {
    left: "-3%",
    bottom: "-130%",
  },
  timerButton: {
    width: 205,
    height: 62,
    alignSelf: "center",
  },
  timerText: {
    fontSize: 25,
    fontFamily: "Lato_400Regular",
    alignSelf: "center",
    bottom: 45,
  },
});
