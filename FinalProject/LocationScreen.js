import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import styles from "./styles";

const API_URL = "https://nominatim.openstreetmap.org/reverse";

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
  const [address, setAddress] = useState("Loading...");
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);

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

      const response = await axios.get(API_URL, {
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
    } catch (error) {
      setAddress("Error retrieving address.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLocationData();
  }, []);

  // Location fetch was async so wait for it to return
  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Page Title and description */}
      <Text style={styles.title}>Solar Tracker App - Your Location</Text>
      <SafeAreaView style={styles.displayArea}>
        <Text style={styles.descriptionText}>
          This is the sunrise / sunset information about your current location!
          Tap the 'Refresh' button to update the data.
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

        {/* Information Display */}
        <Text style={styles.infoItems}>Address: {address}</Text>
        <Text style={styles.infoItems}>
          Latitude: {location.coords.latitude}
        </Text>
        <Text style={styles.infoItems}>
          Longitude: {location.coords.longitude}
        </Text>

        {/* Refresh Button */}
        <TouchableOpacity style={styles.button} onPress={fetchLocationData}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default LocationScreen;
