import * as React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

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
    </SafeAreaView>
  );
};

export default FilmScreen;
