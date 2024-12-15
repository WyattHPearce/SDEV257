// Imports
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
// Third Party Imports
import axios from "axios";
// Local Imports
import styles from "./styles";

const MAP_API_URL = "https://nominatim.openstreetmap.org/reverse"; // OpenStreetMap API URL
const SUN_API_URL = "https://api.sunrise-sunset.org/json"; // Sunset API URL

// Formats address and takes out data if it doesn't exist
function formatAddress(address) {
  const {
    house_number,
    road,
    neighborhood,
    suburb,
    city,
    state,
    postcode,
    country,
  } = address;

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
  // Program States
  const [location, setLocation] = useState(); // Current location
  const [address, setAddress] = useState("Loading..."); // Address of location
  const [loading, setLoading] = useState(true); // Used to know if program is loading
  const [solarData, setSolarData] = useState(null); // State for solar data

  // This function sets and updates program states
  async function fetchLocationData() {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddress("Permission to access location was denied.");
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetch address data
      const response = await axios.get(MAP_API_URL, {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
          format: "json",
        },
      });

      const data = response.data;
      if (data && data.address) {
        const formattedAddress = formatAddress(data.address);
        setAddress(formattedAddress);
      } else {
        setAddress("Address information not available.");
      }

      // Fetch solar data from the Sunset API
      const solarResponse = await axios.get(SUN_API_URL, {
        params: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });

      setSolarData(solarResponse.data.results); // Set solar data in state
    } catch (error) {
      setAddress("Error retrieving address.");
      setSolarData(null); // Reset solar data in case of error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLocationData();
  }, []);

  // Location fetch was async so wait for it to return
  if (!location || !solarData) {
    return (
      <View style={styles.container}>
        <Text>Loading data...</Text>
      </View>
    );
  }

  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Page Title and description */}
        <Text style={styles.title}>Solar Tracker App - Your Location</Text>
        <SafeAreaView style={styles.displayArea}>
          <Text style={styles.descriptionText}>
            This is the sunrise / sunset information about your current
            location! Tap the 'Refresh' button to update the data.
          </Text>

          {/* Map Display */}
          <MapView
            style={styles.mapView}
            showsUserLocation
            followUserLocation
            initialRegion={{
              latitude: location.coords.latitude, // Access latitude via coords
              longitude: location.coords.longitude, // Access longitude via coords
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              pinColor={"red"}
              title="You are here"
              description={address}
            />
          </MapView>

          {/* Refresh Button */}
          <TouchableOpacity style={styles.button} onPress={fetchLocationData}>
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>

          {/* General Information Display */}
          <Text style={styles.infoItems}>Address: {address}</Text>
          <Text style={styles.infoItems}>
            Latitude: {location.coords.latitude}
          </Text>
          <Text style={styles.infoItems}>
            Longitude: {location.coords.longitude}
          </Text>

          {/* Display Solar Data if available */}
          {solarData ? (
            <>
              <Text style={styles.infoItems}>Sunrise: {solarData.sunrise}</Text>
              <Text style={styles.infoItems}>Sunset: {solarData.sunset}</Text>
              <Text style={styles.infoItems}>
                Solar Noon: {solarData.solar_noon}
              </Text>
              <Text style={styles.infoItems}>
                Day Length: {solarData.day_length}
              </Text>
            </>
          ) : (
            <Text style={styles.infoItems}>Solar data not available.</Text>
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LocationScreen;
