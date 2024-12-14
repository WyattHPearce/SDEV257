// Imports
import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";

function LocationScreen({ navigation }) {
  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solar Tracker App - Your Location</Text>
      <Text style={styles.displayArea}>
        This is the sunrise / sunset information about your current location!
        Tap the 'Refresh' button to update the data.
      </Text>
    </SafeAreaView>
  );
}

export default LocationScreen;
