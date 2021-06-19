import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { AuthContext } from "../context";

// or any pure javascript modules available in npm

const { width, height } = Dimensions.get("screen");

export default function CreateAccount({ navigation }) {
  //Please do not take out the following:
  const { signUp } = React.useContext(AuthContext);
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

      <TouchableOpacity style={styles.createAccount} onPress={() => signUp()}>
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
    flexDirection: "column",
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
    color: "white",
  },
});
