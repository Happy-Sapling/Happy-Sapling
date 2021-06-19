import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Journal,
  JournalLog,
  Meditate,
  Question1,
  Question2,
  Question3,
  Accomplishments,
  AccomplishmentsLog,
  Calendar,
  Splash,
} from "./Screens";
import { AuthContext } from "./context";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

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
    <JournalStack.Screen name="JournalLog" component={JournalLog} />
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
    <QuestionsStack.Screen name="Question1" component={Question1} />
    <QuestionsStack.Screen name="Question2" component={Question2} />
    <QuestionsStack.Screen name="Question3" component={Question3} />
  </QuestionsStack.Navigator>
);

const AccomplishmentsStack = createStackNavigator();
const AccomplishmentsStackScreen = () => (
  <AccomplishmentsStack.Navigator>
    <AccomplishmentsStack.Screen
      name="Accomplishments"
      component={Accomplishments}
    />
    <AccomplishmentsStack.Screen
      name="AccomplishmentsLog"
      component={AccomplishmentsLog}
    />
  </AccomplishmentsStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
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
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: "Sign In" }}
            />
            <AuthStack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ title: "Create Account" }}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
