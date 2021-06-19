/*import React from "react";
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
*/

import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
   <View style={styles.container}>

        <Text style={styles.title}>Happy Sapling</Text>

        <View style={styles.inputBox}>
          <Text style={styles.header}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="next"
              style={styles.firstNameInput}
            />
          </View>

          <Text style={styles.header}>Last Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="next"
              style={styles.lastNameInput}
            />
          </View>

          <Text style={styles.header}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="done"
              style={styles.emailInput}
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

          <Text style={styles.header}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="done"
              style={styles.confirmPasswordInput}
            />
          </View>

        </View>

        <TouchableOpacity style={styles.createAccount}>
              <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>

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
    // marginTop: "-15%",
    top: "7%",
    fontSize: 36,
    textAlign: "center",
  },
  inputBox: {
    backgroundColor: "white",
    width: width * 0.7,
    marginTop: 10, // 50
    top: "9%",
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  firstNameInput: {
    backgroundColor: "rgba(242,204,143,0.46)",
    fontSize: 22,
    height: 45, // 40
    borderRadius: 8,
  },
  lastNameInput: {
    backgroundColor: "rgba(235, 93, 118, 0.21)",
    fontSize: 22,
    height: 45, // 40
    borderRadius: 8,
  },
  emailInput: {
    backgroundColor: "rgba(193, 214, 223, 0.46)",
    fontSize: 22,
    borderRadius: 8,
    height: 45,
  },
  passwordInput: {
    backgroundColor: "rgba(129, 178, 154, 0.21)",
    fontSize: 22,
    borderRadius: 8,
    height: 45,
  },
  confirmPasswordInput: {
    backgroundColor: "rgba(61, 64, 91, 0.21)",
    fontSize: 22,
    borderRadius: 8,
    height: 45,
  },
  createAccount: {
    padding: 15,
    marginTop: 10,
    bottom: "5%",
    width: width * 0.7,
    height: 47,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(224, 122, 95, 0.58)",
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 18,
    color: "white"
  }
});
