<<<<<<< HEAD
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
=======
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Animated, Image } from "react-native";

const { width, height } = Dimensions.get("window");
const circleWidth = width*0.6;

import nav_bar from '../../assets/nav_bar.png';
>>>>>>> parent of 7a1982e (Cleaned up meditate and profile designs)

export default function Meditate({ navigation }) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Meditate Screen</Text>
=======
        <Text style={styles.title}>Meditate</Text>
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
              backgroundColor: '#6D7CFF',
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
      <Image style={styles.image} source={nav_bar} />
>>>>>>> parent of 7a1982e (Cleaned up meditate and profile designs)
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
<<<<<<< HEAD
    alignItems: "center",
=======
    alignSelf: 'center',
    position: 'absolute',
    left: '20%',
    top: '32%',
  },
  title: {
    top: -185,
    right: 63,
    margin: 20,
    padding: 10,
    fontSize: 43,
    fontWeight: 'bold',
>>>>>>> parent of 7a1982e (Cleaned up meditate and profile designs)
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
<<<<<<< HEAD
=======
  image: {
    width: 30,
    height: 30,
    bottom: height*-0.4, // top: 1%
    alignSelf: 'center'
  }
>>>>>>> parent of 7a1982e (Cleaned up meditate and profile designs)
});
