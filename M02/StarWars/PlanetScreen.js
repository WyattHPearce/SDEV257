import * as React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

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
    </SafeAreaView>
  );
};

export default PlanetScreen;
