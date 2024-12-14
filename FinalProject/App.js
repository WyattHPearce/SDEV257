`
  Name: Wyatt H. Pearce
  Date: 12/14/2024
  Description:
    The following is my work on the assignment 'Module 08 Final Project Submission'
    I made this program based on what I have learned throughout the course and previous assignments.
    I proposed a plan and various UI mockups in the assignment "Module 04/05 - Final Project Launch".
    You can view these UI mockups in ./assets/Mockup.png
    
    For more information about the project, please view the README.md
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
import LocationScreen from "./LocationScreen";
import SearchScreen from "./SearchScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Location" component={LocationScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      )}
      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Location" component={LocationScreen} />
          <Drawer.Screen name="Search" component={SearchScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
