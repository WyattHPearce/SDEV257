import * as React from "react";
import { Text, SafeAreaView, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

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
    </SafeAreaView>
  );
};

export default SpaceshipScreen;
