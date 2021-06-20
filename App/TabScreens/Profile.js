import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../context";
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import {
  useFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import AppLoading from "expo-app-loading";

const {width, height} = Dimensions.get("screen")

export default function Profile({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  let [fontsLoaded] = useFonts({
    Lato_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}}

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
});
