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
