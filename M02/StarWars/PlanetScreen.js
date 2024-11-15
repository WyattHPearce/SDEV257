import * as React from "react";
import { Text, SafeAreaView, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

import FilmScreen from "./FilmScreen";
import SpaceshipScreen from "./SpaceshipScreen";

const PlanetScreen = ({ navigation }) => {
  const planets = ["Example Planet 1", "Example Planet 2", "Example Planet 3"];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Planets from Star Wars</Text>
      <FlatList
        style={styles.listItem}
        data={planets}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <Button
        title="Go to Planets Page"
        onPress={() => navigation.navigate("Planets")}
      />
      <Button
        title="Go to Films Page"
        onPress={() => navigation.navigate("Films")}
      />
      <Button
        title="Go to Spaceships Page"
        onPress={() => navigation.navigate("Spaceships")}
      />
    </SafeAreaView>
  );
};

export default PlanetScreen;
