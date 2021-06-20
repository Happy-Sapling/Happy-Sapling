import { Calendar } from "react-native-calendars";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Calendar</Text>
      <View>
        <Text
          style={{
            marginBottom: -46,
            alignSelf: "center",
            fontSize: 30,
            zIndex: 10,
          }}
        >
          June
        </Text>
        <Calendar
          current={"2020-03-01"}
          monthFormat={"yyyy MM"}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          hideDayNames={true}
          showWeekNumbers={true}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableArrowLeft={true}
          disableArrowRight={true}
          disableAllTouchEventsForDisabledDays={true}
          renderHeader={(date) => {
            /*Return JSX*/
          }}
        ></Calendar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "1%",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 35,
    textAlign: "center",
  },
});
