import * as React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import apis from "../../../api";

const { width, height } = Dimensions.get("screen");

export default function Accomplishments() {
  const [TrophyLog, setTrophyLog] = React.useState([]);

  React.useEffect(() => {
    async function loadDataAsync() {
      try {
        await apis.getTrophys().then((trophyList) => {
          setTrophyLog(trophyList.data.data);
          console.log(TrophyLog);
        });
      } catch (e) {
        console.warn(e);
      }
    }
    loadDataAsync();
  }, []);
  console.log(TrophyLog);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCOMPLISHMENTS</Text>
      <Text style={styles.title}>LOG</Text>
      <ScrollView
        style={{
          height: "100%",
          width: "88%",
          top: 10,
          margin: 20,
          padding: 20,
          borderRadius: 15,
          backgroundColor: "#F9DED7",
          position: "relative",
          alignSelf: "center",
        }}
      >
        {TrophyLog.map((TrophyLog) => (
          <Text key={TrophyLog._id} style={styles.entryText}>
            {TrophyLog.submission}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#e5e5e5",
    padding: 8,
    marginTop: -10,
  },
  title: {
    fontSize: 25,
    color: "#0D0D0D",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  textBox: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: "#474747",
  },
  selectDate: {
    backgroundColor: "#CACACA",
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 20,
    paddingVertical: 22,
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
});
