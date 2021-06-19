import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => alert("todo!")} />
    <Button title="React Native School" onPress={() => alert("todo!")} />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Calendar = () => (
  <ScreenContainer>
    <Text>Calendar Screen</Text>
  </ScreenContainer>
);

export const Meditate = () => (
  <ScreenContainer>
    <Text>Meditate Screen</Text>
  </ScreenContainer>
);

export const Journal = ({ navigation }) => {
  //const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Journal Screen</Text>
      <Button title="Submit Entry" onPress={() => alert("todo!")} />
      <Button
        title="Journal Log"
        onPress={() => navigation.push("JournalLog")}
      />
    </ScreenContainer>
  );
};

export const JournalLog = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>JournalLog Screen</Text>
    </ScreenContainer>
  );
};

export const Question1 = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Question1 Screen</Text>
      <Button
        title="Submit Entry"
        onPress={() => navigation.push("Question2")}
      />
    </ScreenContainer>
  );
};
export const Question2 = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Question2 Screen</Text>
      <Button
        title="Submit Entry"
        onPress={() => navigation.push("Question3")}
      />
    </ScreenContainer>
  );
};

export const Question3 = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Question3 Screen</Text>
      <Button title="Submit Entry" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const Accomplishments = ({ navigation }) => {
  //const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Accomplishments Screen</Text>
      <Button
        title="Submit Entry"
        onPress={() => navigation.push("AccomplishmentsLog")}
      />
    </ScreenContainer>
  );
};

export const AccomplishmentsLog = ({ navigation }) => {
  //const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>AccomplishmentsLog Screen</Text>
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
