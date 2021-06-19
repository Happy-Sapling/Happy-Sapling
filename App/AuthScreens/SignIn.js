import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { AuthContext } from "../context";
import { useState } from "react";

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api";
import authService from "../../api/services/authService";

const { width, height } = Dimensions.get("screen");

export default function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    async function loadDataAsync() {
      try {
        await api.getUsers().then((usersList) => {
          setUsers(usersList.data.data);
        });
      } catch (e) {
        console.warn(e);
      }
    }
    loadDataAsync();
  }, []);

  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const onSubmit = async () => {
      try {
        let test = await authService.login(email, password);
        await AsyncStorage.setItem("token", test.id);
        signIn();
        console.log(test);
      } catch (error) {
        console.log(error);

        if (error.message == "Request failed with status code 404") {
          Alert.alert("Email not found. Please create an account.");
          return;
        } else if (error.message == "Request failed with status code 401") {
          Alert.alert("Invalid password!");
          return;
        } else if (error.message == "Request failed with status code 403") {
          Alert.alert("Pending Account. Please Verify Your Email!");
          return;
        } else if (error.message == "Request failed with status code 500") {
          Alert.alert("Something went wrong.");
          return;
        }
      }
    };

    const checkTextInput = () => {
      if (email === "" || email === null) {
        Alert.alert("Please enter an email");
        return true;
      } else if (password === "" || password === null) {
        Alert.alert("Please enter a password");
        return true;
      }
      return false;
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Happy Sapling</Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Sign In
        </Text>
        <View style={styles.inputBox}>
          <Text style={styles.header}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="next"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles.signInput}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.header}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              blurOnSubmit={false}
              returnKeyType="done"
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={styles.passwordInput}
            />
          </View>
          <Text style={{ textAlign: "right", fontFamily: "Lato_400Regular" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ top: 150 }}>
          <TouchableOpacity
            style={styles.SignIn}
            onPress={() => {
              if (checkTextInput() == false) {
                onSubmit();
              }
            }}
          >
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
