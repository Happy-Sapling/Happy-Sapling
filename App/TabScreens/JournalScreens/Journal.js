import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import apis from "../../../api";
import { Ionicons } from "@expo/vector-icons";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
const { width, height } = Dimensions.get("screen");

const { width, height } = Dimensions.get("screen");

export default function Journal({ navigation }) {
  const [date, setDate] = React.useState("");
  const [input, setInput] = React.useState("");

  const journal = {
    date: date,
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
        <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
          <Image
            style={styles.journalImage}
            source={require("../../../assets/journal.png")}
            onPress={() => navigation.push("JournalLog")}
          />
          <Text style={styles.title}>Journal</Text>
          <Ionicons
            name="journal"
            size={35}
            color="black"
            style={{ marginTop: 30, marginLeft: "25%" }}
            onPress={() => navigation.push("JournalLog")}
          />
        </View>
        <TextInput
          style={styles.date}
          value={date}
          onChangeText={(date) => setDate(date)}
          placeholder="   Date:  MM/DD/YYYY"
          placeholderTextColor="#484646"
        />
        <TextInput
          style={styles.entry}
          value={input}
          onChangeText={(input) => setInput(input)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("JournalLog")}
        >
          <Text
            style={styles.buttonText}
            onPress={async () => {
              apis
                .createJournal(journal)
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
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "100%",
  },
  journalImage: {
    height: 37,
    width: 37,
    top: "11%",
    left: width * 0.85,
    zIndex: 2,
  },
  title: {
    top: "7.5%",
    right: "19%",
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: "200",
    textAlign: "center",
    position: "relative",
    fontFamily: "Lato_400Regular",
  },
  date: {
    height: "10%",
    width: "88%",
    top: 35,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#D4ECE0",
    position: "relative",
    alignSelf: "center",
    fontSize: 19,
  },
  entry: {
    height: "60%",
    width: "88%",

    top: 15,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#CCE1F2",
    position: "relative",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#878AA0",
    width: 150,
    height: 63,

    left: width * 0.55, // 200

    bottom: 85,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  image: {
    width: 30,
    height: 30,
    bottom: height * 0.01, // top: 1%
    alignSelf: "center",
  },
});
