`
  Name: Wyatt H. Pearce
  Date: 12/4/2024
  Description:
    The following is my work on the assignment 'Module 04 Assignment 2 - Star Wars Search'
    I made this program based on the previous Star Wars assignment in module 2, and by following 
    along with the textbook in chapter 22 and 23. Here were the instructions I followed for this assignment:

      "1) Open your Star Wars app from Module 2 - Assignment 2. DO NOT CREATE A NEW APP.
      2) On the top of each screen, add an input box where a user can enter a search term.
      3) After the user submits their text, display the entered text in a modal dialog."

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
import SpaceshipScreen from "./SpaceshipScreen";

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
          <Tab.Screen name="Spaceships" component={SpaceshipScreen} />
        </Tab.Navigator>
      )}
      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Planets" component={PlanetScreen} />
          <Drawer.Screen name="Films" component={FilmScreen} />
          <Drawer.Screen name="Spaceships" component={SpaceshipScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
