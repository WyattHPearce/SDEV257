// Imports
import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";

function HomeScreen({ navigation }) {
  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solar Tracker App - Home</Text>
      <Text style={styles.displayArea}>
        Welcome to the Sunrise/Sunset Info App! Quickly check sunrise, sunset
        and solar time data for your current location or search for any place
        around the world!
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
