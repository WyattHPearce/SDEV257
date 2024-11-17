import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Star Wars App - Home Page</Text>
    <Text style={styles.displayArea}>
      This app allows users to query SWAPI (StarWarsAPI) data and view it in
      lists. Press on the navigation selector to get started!
    </Text>
  </SafeAreaView>
);

export default HomeScreen;
