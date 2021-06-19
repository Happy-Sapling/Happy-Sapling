import * as React from 'react';
import { AuthContext } from "../context";
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

const {width, height} = Dimensions.get("screen")

export default function Profile({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>

      <View style={styles.titleSection}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.titleText}>ALICE</Text>
      </View>

      <View style={styles.userSection}>
        <Image style={styles.circle} source={require("../../assets/circle.png")} />
        <Image style={styles.alicePic} source={require("../../assets/alice.png")} />
        <Text style={styles.aliceName}>Alice Smith</Text>
        <Text style={styles.aliceFeeling}>Feeling  Happy</Text>
        <View style={styles.aliceFeelingColor}></View>
      </View>

      <View style={styles.settingSection}>
        <Text style={styles.settingTitle}>Settings</Text>
        <View style={styles.settingLine}></View>
        <View style={styles.settingOption}> 
          <Image style={styles.settingImage1} source={require("../../assets/lock.png")} onPress={() => signOut()}/>
          <Text style={styles.settingText1} onPress={() => signOut()}>Sign Out</Text>
        </View>
        <View style={styles.settingOption}>
          <Image style={styles.settingImage2} source={require("../../assets/trashcan.png")} />
          <Text style={styles.settingText2}>Delete Account</Text>
        </View>
      </View>

      <View style={styles.iconSection}>
        <View style={styles.iconBar}>
          <Image style={styles.iconImage} source={require("../../assets/twitter.png")} />
          <Image style={styles.iconImage} source={require("../../assets/facebook.png")}/>
          <Image style={styles.iconImage} source={require("../../assets/instagram.png")} />
          <Image style={styles.iconImage} source={require("../../assets/snapchat.png")} />
        </View>
        <Image style={styles.navBar} source={require("../../assets/nav_bar.png")} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titleSection: {
    flex: 0.11,
    padding: 20, 
    margin: 10,
    width: width*0.88,
    alignSelf: "center"
  },
  welcomeText: {
    color: '#484646',
    fontSize: 24,
    fontFamily: 'Lato_400Regular',
    top: height*-0.035
  },
  titleText: {
    marginTop: height*0.001, // 10
    color: "#0D0D0D",
    fontSize: 40,
    top: height*-0.025
  },
  userSection: {
    flex: 0.3,
    paddingTop: 10, 
    margin: 10,
    width: width*0.88,
    alignSelf: "center"
  },
  circle: {
    width: width*0.5,
    height: width*0.5,
    bottom: height*0.01,
    top: height*-0.03
  },
  alicePic: {
    width: width*0.35,
    height: width*0.35,
    position: 'absolute',
    top: height*0.02,
    left: "8.5%"
  },
  aliceName: {
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    top: height*0.045,
    right: width*0.075,
    fontFamily: 'Lato_400Regular',
  },
  aliceFeeling: {
    fontSize: 18.5,
    color: 'black',
    zIndex: 1.2,
    position: 'absolute',
    top: height*0.09,
    right: width*0.06,
    fontFamily: 'Lato_400Regular'
  },
  aliceFeelingColor: {
    backgroundColor: '#FFC1C1',
    height: height*0.033,
    width: width*0.154,
    borderRadius: 10,
    position: 'absolute',
    top: height*0.087,
    right: width*0.043
  },
  settingSection: {
    flex: 0.25,
    paddingTop: 10, 
    margin: 10,
    width: width*0.88,
    alignSelf: "center"
  },
  settingTitle: {
    fontSize: 22,
    left: width*0.04,
    top: height*0.02,
    fontFamily: 'Lato_400Regular',
    fontWeight: "600"
  },
  settingLine: {
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    borderRadius: 10,
    height: height*0.003,
    width: width*0.83,
    top: height*0.03,
    alignSelf: "center"
  },
  settingOption: {
    flex: 1,
    flexDirection: 'row'
  },
  settingImage1: {
    height: 21,
    width: 21,
    margin: 10,
    top: height*0.04,
    left: width*0.007
  },
  settingImage2: {
    height: 21,
    width: 21,
    margin: 10,
    bottom: height*0.001,
    left: width*0.007,
    top: height*0.02
  },
  settingText1: {
    fontSize: 16,
    left: width*0.01,
    top: height*0.055,
    marginLeft: 4,
    fontFamily: 'Lato_400Regular'
  },
  settingText2: {
    fontSize: 16,
    left: width*0.01,
    top: height*0.035,
    marginLeft: 4,
    fontFamily: 'Lato_400Regular'
  },
  iconSection: {
    flex: 0.2,
    paddingTop: 10, 
    margin: 10,
    top: height*0.03,
    width: width*0.88,
    alignSelf: "center",
    alignItems: "center"
  },
  iconBar: {
    flex: 1,
    flexDirection: 'row',
  },
  iconImage: {
    height: 10,
    width: 10,
    marginTop: 20,
    marginLeft: 18,
    marginRight: 18,
    padding: 10
  },
  navBar: {
    height: 25,
    width: 25,
    bottom: height*0.001
  }
});

