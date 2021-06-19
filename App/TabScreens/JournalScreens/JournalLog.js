import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, Dimensions } from 'react-native';

// You can import from local files
import go_back from '../../../assets/go_back.png';

// or any pure javascript modules available in npm
const {width, height} = Dimensions.get("screen")

// NEED TO ADD ICON AT TOP STILL TO RETURN TO JOURNAL PAGE

export default function JournalLog({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Log</Text>
      <TextInput
        style={styles.date}
        placeholder="   Select Date"
        placeholderTextColor="#484646"
      />
      <View style={styles.entryBackground}>
        <Text style={styles.entryText}>My Journal Log</Text>
      </View>
      <Image style={styles.image} source={go_back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
  title: {
    top: '4%',
    right: '12%',
    margin: 20,
    padding: 10,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  date: {
    height: '10%',
    width: '88%',
    top: height*0.04,   // 35
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#CACACA',
    position: 'relative',
    alignSelf: 'center',
    fontSize: 19,
  },
  entryBackground: {
    height: '40%',
    width: '88%',
    top: 15,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F2D5CC',
    position: 'relative',
    alignSelf: 'center',
  },
  entryText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 19,
    color: "#474747",
    margin: 15,
    paddingTop: 3
  },
  image: {
    width: 23,
    height: 23,
    right: "-7%",
    bottom: height*0.75,  // 74%
  }
});

