// Imports
import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";

function SearchScreen({ navigation }) {
  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solar Tracker App - Search Locations</Text>
      <Text style={styles.displayArea}>
        Search for sunrise/sunset information for a specific location by
        entering an address OR a latitude and longitude pair.
      </Text>
    </SafeAreaView>
  );
}

export default SearchScreen;
