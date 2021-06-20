import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import apis from "../../../api";

// or any pure javascript modules available in npm
const { width, height } = Dimensions.get("screen");

export default function JournalLog({ props }) {
  const [journalLog, setJournalLog] = React.useState([]);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    async function loadDataAsync() {
      try {
        await apis.getJournals().then((journalsList) => {
          setJournalLog(journalsList.data.data);
          console.log(journalLog);
        });
      } catch (e) {
        console.warn(e);
      }
    }
    loadDataAsync();
  }, []);
  console.log(journalLog);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Log</Text>
      <ScrollView
        style={{
          height: "100%",
          width: "88%",
          top: 10,
          margin: 20,
          padding: 20,
          borderRadius: 15,
          backgroundColor: "#F2D5CC",
          position: "relative",
          alignSelf: "center",
        }}
      >
        {journalLog.map((journalLog) => (
          <Text key={journalLog._id} style={styles.entryText}>
            {journalLog.submission}
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
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "100%",
  },
  title: {
    top: "4%",
    right: "12%",
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    height: "10%",
    width: "88%",
    top: height * 0.04, // 35
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#CACACA",
    position: "relative",
    alignSelf: "center",
    fontSize: 19,
  },
  entryBackground: {
    height: "100%",
    width: "88%",
    top: 15,
    margin: 20,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#F2D5CC",
    position: "relative",
    alignSelf: "center",
  },
  entryText: {
    flex: 1,
    flexDirection: "row",
    fontSize: 19,
    color: "black",
    margin: 15,
    paddingTop: 3,
  },
  image: {
    width: 23,
    height: 23,
    right: "-7%",
    bottom: height * 0.75, // 74%
  },
});
