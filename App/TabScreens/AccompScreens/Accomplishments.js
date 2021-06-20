import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const { width, height } = Dimensions.get("screen");

import apis from "../../../api";

const { width, height } = Dimensions.get("screen");

export default function Accomplishments({ navigation }) {
  const [input, setInput] = React.useState("");
  const trophy = {
    submission: input,
  };
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ACCOMPLISHMENTS</Text>
        <View>
          <Text style={styles.subtitle}>Of the Day</Text>
        </View>
        <View style={styles.trophy}>
          <Ionicons
            name="trophy"
            size={32}
            color="black"
            onPress={() => navigation.push("AccomplishmentsLog")}
          />
        </View>

        <View style={styles.red}>
          <TextInput
            style={styles.textBox}
            bluronSubmit={false}
            value={input}
            onChangeText={(input) => setInput(input)}
            placeholder="Insert Text Here"
            placeholderTextColor="#474747"
          />
        </View>
        <TouchableOpacity>
          <Text
            style={styles.submit}
            onPress={async () => {
              apis
                .createTrophy(trophy)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#e5e5e5",
    padding: 8,
  },
  title: {
    fontSize: 29,
    color: "#0D0D0D",
    textAlign: "left",
    paddingHorizontal: 20,
    marginTop: -20,
  },
  subtitle: {
    marginTop: height * 0.0017,
    color: "#484646",
    fontSize: 20,
    textAlign: "left",
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 20,
  },
  textBox: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    top: 10,
    left: 3,
  },
  red: {
    backgroundColor: "#F5CDDE",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 14,
    paddingVertical: 22,
  },

  orange: {
    backgroundColor: "#F9DED7",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 14,
    paddingVertical: 22,
  },

  yellow: {
    backgroundColor: "#FBF7D5",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 14,
    paddingVertical: 22,
  },

  green: {
    backgroundColor: "#D4ECE0",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 14,
    paddingVertical: 22,
  },

  blue: {
    backgroundColor: "#CCE1F2",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 14,
    paddingVertical: 22,
  },
  submit: {
    marginTop: 15,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    width: 110,
    height: 40,
    backgroundColor: "#CACACA",
    borderRadius: 15,
    fontSize: 20,
    color: "#474747",
  },
  trophy: {
    marginLeft: width * 0.83,
    marginTop: -120,
    paddingVertical: 50,
  },
});
