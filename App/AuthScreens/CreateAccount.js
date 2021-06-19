import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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

export default function CreateAccount({ navigation }) {
  //Please do not take out the following:
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account Screen</Text>
      <View style={{ top: 150 }}>
        <TouchableOpacity style={styles.SignIn} onPress={() => signUp()}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text style={styles.SignInText}>Create your account</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  title: {
    marginTop: "-40%",
    fontSize: 24,
    textAlign: "center",
  },

  inputBox: {
    backgroundColor: "white",
    width: width * 0.7,
    marginTop: 50,
  },
  header: {
    fontSize: 16,
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
  },
  createAccountSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});
