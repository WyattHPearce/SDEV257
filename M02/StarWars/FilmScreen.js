import * as React from "react";
import { Text, SafeAreaView, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

import PlanetScreen from "./PlanetScreen";
import SpaceshipScreen from "./SpaceshipScreen";

const FilmScreen = ({ navigation }) => {
  const films = ["Example Film 1", "Example Film 2", "Example Film 3"];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Star Wars Films</Text>
      <FlatList
        style={styles.listItem}
        data={films}
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
