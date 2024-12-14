// Imports
import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";

function HomeScreen({ navigation }) {
  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      {/* Page Title and description */}
      <Text style={styles.title}>Solar Tracker App - Home</Text>
      <SafeAreaView style={styles.displayArea}>
        <Text style={styles.descriptionText}>
          Welcome to the Sunrise/Sunset Info App! Quickly check sunrise, sunset
          and solar time data for your current location or search for any place
          around the world!
        </Text>

        {/* Navigation button for Location Screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Location")}
        >
          <Text style={styles.buttonText}>View Current Location</Text>
        </TouchableOpacity>

        {/* Navigation button for Search Screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonText}>Search a Location</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default HomeScreen;
