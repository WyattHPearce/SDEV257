import * as React from "react";
import { Text, SafeAreaView, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

import PlanetScreen from "./PlanetScreen";
import FilmScreen from "./FilmScreen";

const SpaceshipScreen = ({ navigation }) => {
  const ships = ["Example Ship 1", "Example Ship 2", "Example Ship 3"];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Spaceships from Star Wars</Text>
      <FlatList
        style={styles.listItem}
        data={ships}
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

export default SpaceshipScreen;
