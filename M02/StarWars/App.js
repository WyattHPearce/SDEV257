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
// Dependencies
import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// External StyleSheet
import styles from "./styles";

// Screens
import HomeScreen from "./HomeScreen";
import PlanetScreen from "./PlanetScreen";
import FilmScreen from "./FilmScreen";
import StarshipScreen from "./StarshipScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Planets" component={PlanetScreen} />
          <Tab.Screen name="Films" component={FilmScreen} />
          <Tab.Screen name="Starships" component={StarshipScreen} />
        </Tab.Navigator>
      )}
      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Planets" component={PlanetScreen} />
          <Drawer.Screen name="Films" component={FilmScreen} />
          <Drawer.Screen name="Starships" component={StarshipScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
