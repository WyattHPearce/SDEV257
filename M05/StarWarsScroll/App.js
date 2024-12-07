`
  Name: Wyatt H. Pearce
  Date: 12/6/2024
  Description:
    The following is my work on the assignment 'Module 05 Assignment 1 - Star Wars Scroll'
    I made this program based on the previous StarWarsAPI Assignment, and by following material
    in chapters 23 and 24 of the course textbook. Here were the instructions I followed for this assignment:

      "On each screen, place your list of returned items in a ScrollView.
      Refer to Chapter 24 for details on implementing a ScrollView.
      Make each item in the list "Swipeable."
      For now, make the action executed by the swipe simply display a modal dialog with the text of the item.
      Refer to Chapter 23 for details on Modal Dialogs."

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
