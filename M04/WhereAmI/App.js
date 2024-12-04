// External Imports
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
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
  useEffect(() => {
    async function setPosition() {
      try {
        let location = await Location.getCurrentPositionAsync({});
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
        }
      } catch (error) {
        console.error("Error fetching location data with axios: ", error);
        setAddress("Error retrieving address ", error);
      }
    }

    let watcher;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition(location);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        setPosition
      );
    })();

    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </SafeAreaView>
  );
}
