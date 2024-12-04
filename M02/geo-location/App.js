// External Imports
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
// Local Imports
import styles from "./styles";

const API_URL = "https://nominatim.openstreetmap.org/reverse";

// Function to format the address
function formatAddress(address) {
  // Extract individual elements
  const {
    shop,
    house_number,
    road,
    neighborhood,
    suburb,
    county,
    city,
    state,
    iso,
    postcode,
    country,
    countryCode,
  } = address;

  // Format a string from extracted data
  return [
    house_number,
    road,
    neighborhood,
    suburb,
    city,
    state,
    postcode,
    country,
  ]
    .filter(Boolean)
    .join(", ");
}

export default function App() {
  // Program states
  const [address, setAddress] = useState("Loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  // Getting the users location from device
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <Text>Geo-Location basic setup complete.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
