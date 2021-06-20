import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import apis from "../../api";

import { AuthContext } from "../context";
import { NavigationContainer } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

export default function CreateAccount({ navigation }) {
  //Please do not take out the following:
  const { signIn } = React.useContext(AuthContext);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = {
    firstName: first,
    lastName: last,
    email: email,
    password: password,
  };

  const checkTextInput = () => {
    if (first === "" || first === null) {
      Alert.alert("Please enter your first name");
    } else if (last === "" || last === null) {
      Alert.alert("Please enter your last name");
    } else if (email === "" || email === null) {
      Alert.alert("Please enter an email");
    } else if (password === "" || password === null) {
      Alert.alert("Oops, you forgot to enter a password.");
    } else if (confirmPassword === "" || confirmPassword === null) {
      Alert.alert("Please confirm your password");
    } else if (confirmPassword !== password) {
      Alert.alert("Passwords do not match");
    } else {
      navigation.push("SignIn");
    }
  };

  const lengthCheck = () => {
    if (email.length < 8) {
      Alert.alert("Too short!");
    }
  };

  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const passwordCheck = () => {
    if (strongRegex.test(password)) {
      return;
    } else {
      Alert.alert(
        "Password must contain at least:1 lowercase alphabetical character, 1 uppercase alphabetical character,  1 numeric character, 1 special character and be 8 characters long."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Sapling</Text>

      <View style={styles.inputBox}>
        <Text style={styles.header}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={first}
            onChangeText={(first) => setFirst(first)}
            style={styles.firstNameInput}
          />
        </View>

        <Text style={styles.header}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={last}
            onChangeText={(last) => setLast(last)}
            style={styles.lastNameInput}
          />
        </View>

        <Text style={styles.header}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType="done"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.emailInput}
          />
        </View>

        <Text style={styles.header}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType="done"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onSubmitEditing={() => {
              //passwordCheck();
            }}
            style={styles.passwordInput}
          />
        </View>

        <Text style={styles.header}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            blurOnSubmit={false}
            returnKeyType="done"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            style={styles.confirmPasswordInput}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.createAccount}
        onPress={async () => {
          checkTextInput();
          apis
            .createUser(user)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }}
      >
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
