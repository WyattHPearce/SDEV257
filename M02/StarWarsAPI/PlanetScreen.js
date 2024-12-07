import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";

import styles from "./styles";

const PlanetScreen = ({ navigation }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API and put it in the corresponding array
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("https://www.swapi.tech/api/planets/");
        console.log("API response:", response.data); // Log the API response
        setPlanets(response.data.results);
      } catch (error) {
        console.log("Error fetching planet data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  // Display activityIndicator while loading is true
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading Planets...</Text>
      </SafeAreaView>
    );
  }

  // Displaying the data in a FlatList
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Planets in Star Wars:</Text>
      <SafeAreaView style={styles.displayArea}>
        <FlatList
          data={planets}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <SafeAreaView style={styles.item}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemSubtitle}>{item.url}</Text>
            </SafeAreaView>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default PlanetScreen;
