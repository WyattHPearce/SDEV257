`
  Name: Wyatt H. Pearce
  Date: 11/13/2024
  Description:
    The following is my work on the assignment 'M02 Lecture lab activity'
    I made this program while following along with the instructor and made the following
    changes to his original program:
      Added two more sports (Football and Disc Golf)
      Added realistic names for each team
      Added the "buttons" on the bottom of each teams page
      Included this header comment to identify myself as Wyatt Pearce and explain this program
`;

import * as React from "react";
import { Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BaseballScreen from "./BaseballScreen";
import BasketballScreen from "./BasketballScreen";
import SoccerScreen from "./SoccerScreen";
import FootballScreen from "./FootballScreen";
import DiscGolfScreen from "./DiscGolfScreen";

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to the Sports App!</Text>
    <Button
      style={styles.button}
      title="Go to Baseball Teams"
      onPress={() => navigation.navigate("Baseball")}
    />
    <Button
      style={styles.button}
      title="Go to Basketball Teams"
      onPress={() => navigation.navigate("Basketball")}
    />
    <Button
      style={styles.button}
      title="Go to Soccer Teams"
      onPress={() => navigation.navigate("Soccer")}
    />
    <Button
      style={styles.button}
      title="Go to Football Teams"
      onPress={() => navigation.navigate("Football")}
    />
    <Button
      style={styles.button}
      title="Go to Disc Golf Teams"
      onPress={() => navigation.navigate("DiscGolf")}
    />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Baseball" component={BaseballScreen} />
        <Stack.Screen name="Basketball" component={BasketballScreen} />
        <Stack.Screen name="Soccer" component={SoccerScreen} />
        <Stack.Screen name="Football" component={FootballScreen} />
        <Stack.Screen name="DiscGolf" component={DiscGolfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center-top",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontStyle: "bold",
    margin: 15,
  },
});

export default App;
