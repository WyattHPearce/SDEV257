import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import styles from "./styles";

const MAP_API_URL = "https://nominatim.openstreetmap.org/search"; // OpenStreetMap API URL
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

function SearchScreen({ navigation }) {
  // Program States
  const [address, setAddress] = useState(""); // Address search input
  const [location, setLocation] = useState(null); // Location data from search
  const [addressInfo, setAddressInfo] = useState(
    "Search for an address to begin."
  );
  const [solarData, setSolarData] = useState(null); // Solar data state
  const [loading, setLoading] = useState(false); // Loading state

  // Function to fetch location and solar data based on search query
  async function fetchLocationData() {
    if (!address.trim()) return;

    setLoading(true);
    try {
      // Fetch coordinates for the given address from OpenStreetMap
      const response = await axios.get(MAP_API_URL, {
        params: {
          q: address,
          format: "json",
          addressdetails: 1,
          limit: 1,
        },
      });

      const data = response.data;
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        const formattedAddress = formatAddress(data[0].address);
        setLocation({ lat, lon });
        setAddressInfo(formattedAddress);

        // Fetch solar data using the latitude and longitude
        const solarResponse = await axios.get(SUN_API_URL, {
          params: { lat, lng: lon },
        });

        setSolarData(solarResponse.data.results);
      } else {
        setAddressInfo("No results found for this address.");
        setLocation(null);
        setSolarData(null);
      }
    } catch (error) {
      setAddressInfo("Error retrieving location or solar data.");
      setSolarData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Solar Tracker App - Search Location</Text>
        <Text style={styles.descriptionText}>
          Here you can search for a location by name or address and we will do
          our best to find data on that location!
        </Text>
        {/* Search Bar */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter address or location name..."
          value={address}
          onChangeText={setAddress}
          onSubmitEditing={fetchLocationData} // Trigger search on Enter
        />

        {/* Loading State */}
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SafeAreaView style={styles.displayArea}>
            {/* Map Display */}
            {location && (
              <MapView
                style={styles.mapView}
                showsUserLocation
                followUserLocation
                initialRegion={{
                  latitude: parseFloat(location.lat),
                  longitude: parseFloat(location.lon),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(location.lat),
                    longitude: parseFloat(location.lon),
                  }}
                  pinColor={"red"}
                  title="Location"
                  description={addressInfo}
                />
              </MapView>
            )}

            {/* Address and Solar Data Display */}
            <Text style={styles.infoItems}>Address: {addressInfo}</Text>

            {solarData ? (
              <>
                <Text style={styles.infoItems}>
                  Sunrise: {solarData.sunrise}
                </Text>
                <Text style={styles.infoItems}>Sunset: {solarData.sunset}</Text>
                <Text style={styles.infoItems}>
                  Solar Noon: {solarData.solar_noon}
                </Text>
                <Text style={styles.infoItems}>
                  Day Length: {solarData.day_length}
                </Text>
              </>
            ) : (
              <Text style={styles.infoItems}>
                Solar data: Search for an address to begin.
              </Text>
            )}
          </SafeAreaView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
