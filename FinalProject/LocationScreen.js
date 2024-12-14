// Imports
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
// Third party Imports
import axios from "axios";
// Local Imports
import styles from "./styles";

// URL of location API
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

function LocationScreen({ navigation }) {
  // Program states
  const [address, setAddress] = useState("Loading...");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  // Function to fetch location and address data
  async function fetchLocationData() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddress("Permission to access location was denied.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLongitude(longitude);
      setLatitude(latitude);

      const response = await axios.get(API_URL, {
        params: {
          lat: latitude,
          lon: longitude,
          format: "json",
        },
      });

      console.log("Full response data:", response.data);
      const data = response.data;

      if (data && data.address) {
        const formattedAddress = formatAddress(data.address);
        setAddress(formattedAddress);
      } else {
        console.warn("Address information not found in response data.");
        setAddress("Address information not available.");
      }
    } catch (error) {
      console.error("Error fetching location data: ", error);
      setAddress("Error retrieving address.");
    }
  }

  // Fetch location data when the component mounts
  useEffect(() => {
    fetchLocationData();
  }, []);

  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      {/* Page Title and description */}
      <Text style={styles.title}>Solar Tracker App - Your Location</Text>
      <SafeAreaView style={styles.displayArea}>
        <Text style={styles.descriptionText}>
          This is the sunrise / sunset information about your current location!
          Tap the 'Refresh' button to update the data.
        </Text>

        {/* Location Info Display */}
        <Text style={styles.infoItems}>Address: {address}</Text>
        <Text style={styles.infoItems}>Latitude: {latitude}</Text>
        <Text style={styles.infoItems}>Longitude: {longitude}</Text>

        {/* Refresh Button */}
        <TouchableOpacity style={styles.button} onPress={fetchLocationData}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default LocationScreen;
