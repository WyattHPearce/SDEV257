`
  Name: Wyatt H. Pearce
  Date: 11/14/2024
  Description:
    The following is my work on the assignment 'Module 02 Assignment 2 - Star Wars'
    I made this program based on the previous SportsTeam Lecture lab, by following 
    along with the instructor. Here were the instructions I followed for this assignment:

      "Using your text as a guide, create three screens.  One for Planets, one for Films, and one for Spaceships.
      Use bottom tab navigation on iOS and drawer navigation on Android.
      Ensure you can navigate to each screen.  For now, add a text field to each screen displaying the screen name."

`;

import * as React from "react";
import { Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import styles from "./styles";

import PlanetScreen from "./PlanetScreen";
import FilmScreen from "./FilmScreen";
import SpaceshipScreen from "./SpaceshipScreen";

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to the Star Wars App</Text>
    <Button
      style={styles.button}
      title="Go to the Planets Page"
      onPress={() => navigation.navigate("Planets")}
    />
    <Button
      style={styles.button}
      title="Go to the Films Page"
      onPress={() => navigation.navigate("Films")}
    />
    <Button
      style={styles.button}
      title="Go to the Spaceships Page"
      onPress={() => navigation.navigate("Spaceships")}
    />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planets" component={PlanetScreen} />
        <Stack.Screen name="Films" component={FilmScreen} />
        <Stack.Screen name="Spaceships" component={SpaceshipScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
