import * as React from 'react';
import { AuthContext } from "../context";
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

// You can import from local files

/*import alice from '../../../assets/alice';
import circle from '../../../assets/circle';
import lock from '../../../assets/lock';
import trashcan from '../../../assets/trashcan';
import twitter from '../../../assets/twitter';
import facebook from '../../../assets/facebook';
import instagram from '../../../assets/instagram';
import snapchat from '../../../assets/snapchat';*/

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
        <Text style={styles.aliceFeeling}>Feeling Happy</Text>
        <View style={styles.aliceFeelingColor}></View>
      </View>

      <View style={styles.settingSection}>
        <Text style={styles.settingTitle}>Settings</Text>
        <View style={styles.settingLine}></View>
        <View style={styles.settingOption}> 
          <Image style={styles.settingImage1} source={require("../../assets/lock.png")} onPress={() => signOut()}/>
          <Text style={styles.settingText1} onPress={() => signOut()}>Log out</Text>
        </View>
        <View style={styles.settingOption}>
          <Image style={styles.settingImage2} source={require("../../assets/trashcan.png")} />
          <Text style={styles.settingText2}>Delete account</Text>
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
    fontSize: 18
  },
  titleText: {
    marginTop: height*0.001, // 10
    color: "#0D0D0D",
    fontSize: 40
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
    bottom: height*0.01
  },
  alicePic: {
    width: width*0.35,
    height: width*0.35,
    position: 'absolute',
    top: '19%',
    left: "8.5%"
  },
  aliceName: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    top: height*0.05,
    right: width*0.068
  },
  aliceFeeling: {
    fontSize: 17,
    color: 'black',
    zIndex: 1.2,
    position: 'absolute',
    top: height*0.099,
    right: width*0.05
  },
  aliceFeelingColor: {
    backgroundColor: '#FFC1C1',
    height: height*0.033,
    width: width*0.154,
    borderRadius: 10,
    position: 'absolute',
    top: height*0.1,
    right: width*0.04
  },
  settingSection: {
    flex: 0.25,
    paddingTop: 10, 
    margin: 10,
    width: width*0.88,
    alignSelf: "center"
  },
  settingTitle: {
    fontSize: 18,
    left: width*0.04
  },
  settingLine: {
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    borderRadius: 10,
    height: height*0.003,
    width: width*0.83,
    top: height*0.013,
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
    top: height*0.02,
    left: width*0.007
  },
  settingImage2: {
    height: 21,
    width: 21,
    margin: 10,
    bottom: height*0.001,
    left: width*0.007
  },
  settingText1: {
    fontSize: 15.5,
    left: width*0.01,
    top: height*0.035
  },
  settingText2: {
    fontSize: 16,
    left: width*0.01,
    top: height*0.012
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
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  navBar: {
    height: 25,
    width: 25,
    bottom: height*0.02
  }
});

