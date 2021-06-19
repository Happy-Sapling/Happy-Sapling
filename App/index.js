import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./AuthScreens/SignIn";
import CreateAccount from "./AuthScreens/CreateAccount";

import Home from "./TabScreens/Home";
import Journal from "./TabScreens/JournalScreens/Journal";
import JournalLog from "./TabScreens/JournalScreens/JournalLog";
import Calendar from "./TabScreens/Calendar";
import Meditate from "./TabScreens/Meditate";
import Question1 from "./TabScreens/QuestionsScreens/Question1";
import Question2 from "./TabScreens/QuestionsScreens/Question2";
import Question3 from "./TabScreens/QuestionsScreens/Question3";
import Accomplishments from "./TabScreens/AccompScreens/Accomplishments";
import AccomplishmentsLog from "./TabScreens/AccompScreens/AccomplishmentsLog";
import Profile from "./TabScreens/Profile";
import Splash from "./TabScreens/Splash";
import { AuthContext } from "./context";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In", headerShown: false }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{
        title: "Create Account",
        animationEnabled: false,
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Journal" component={JournalStackScreen} />
    <Tabs.Screen name="Calendar" component={CalendarStackScreen} />
    <Tabs.Screen name="Meditate" component={MeditateStackScreen} />
    <Tabs.Screen name="Questions" component={QuestionsStackScreen} />
    <Tabs.Screen
      name="Accomplishments"
      component={AccomplishmentsStackScreen}
    />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const JournalStack = createStackNavigator();
const JournalStackScreen = () => (
  <JournalStack.Navigator>
    <JournalStack.Screen name="Journal" component={Journal} />
    <JournalStack.Screen
      name="JournalLog"
      component={JournalLog}
      options={{
        animationEnabled: false,
      }}
    />
  </JournalStack.Navigator>
);

const CalendarStack = createStackNavigator();
const CalendarStackScreen = () => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar" component={Calendar} />
  </CalendarStack.Navigator>
);

const MeditateStack = createStackNavigator();
const MeditateStackScreen = () => (
  <MeditateStack.Navigator>
    <MeditateStack.Screen name="Meditate" component={Meditate} />
  </MeditateStack.Navigator>
);

const QuestionsStack = createStackNavigator();
const QuestionsStackScreen = () => (
  <QuestionsStack.Navigator>
    <QuestionsStack.Screen
      name="Question1"
      component={Question1}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
    <QuestionsStack.Screen
      name="Question2"
      component={Question2}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
    <QuestionsStack.Screen
      name="Question3"
      component={Question3}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
  </QuestionsStack.Navigator>
);

const AccomplishmentsStack = createStackNavigator();
const AccomplishmentsStackScreen = () => (
  <AccomplishmentsStack.Navigator>
    <AccomplishmentsStack.Screen
      name="Accomplishments"
      component={Accomplishments}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
    <AccomplishmentsStack.Screen
      name="AccomplishmentsLog"
      component={AccomplishmentsLog}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
  </AccomplishmentsStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => {
    return {
      signIn: async (foundUser) => {
        //setIsLoading(false);
        //setUserToken("asdf");

        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signUp: () => {
        //setIsLoading(false);
        //setUserToken("asdf");
      },
      signOut: async () => {
        //setIsLoading(false);
        //setUserToken(null);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
