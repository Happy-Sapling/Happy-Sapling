import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { AuthContext } from "../context";

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");

export default function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Happy Sapling</Text>
        <View style={styles.inputBox}>
          <Text style={styles.header}>Sign In</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="next"
              style={styles.signInput}
            />
          </View>

          <Text style={styles.header}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="done"
              style={styles.passwordInput}
            />
          </View>
          <Text style={{ textAlign: "right", fontFamily: "Lato_400Regular" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ top: 150 }}>
          <TouchableOpacity style={styles.SignIn} onPress={() => signIn()}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text style={styles.SignInText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.createAccountSection}>
            <Text>Don't have an account? {""}</Text>
            <Text
              onPress={() => navigation.push("CreateAccount")}
              style={{ fontWeight: "bold" }}
            >
              Create a new one!
            </Text>
          </View>
        </View>
      </View>
    );
  }
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
  title: {
    marginTop: "-40%",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Lato_400Regular",
  },

  inputBox: {
    backgroundColor: "white",
    width: width * 0.7,
    marginTop: 50,
  },
  header: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  signInput: {
    backgroundColor: "rgba(242,204,143,0.67)",
    fontSize: 22,
    height: 40,
    borderRadius: 8,
  },
  passwordInput: {
    backgroundColor: "rgba(224,122,95,0.21)",
    fontSize: 22,
    borderRadius: 8,
    height: 40,
  },
  SignIn: {
    padding: 15,
    marginTop: 70,
    width: width * 0.7,
    height: 50,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "rgba(224,122,95,0.58)",
  },
  SignInText: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Lato_400Regular",
  },
  createAccountSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});
