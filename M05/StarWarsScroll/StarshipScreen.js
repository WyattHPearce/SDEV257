import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";

import styles from "./styles";

const StarshipScreen = ({ navigation }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API and put it in the corresponding array
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get(
          "https://www.swapi.tech/api/starships/"
        );
        console.log("API response:", response.data); // Log the API response
        setStarships(response.data.results);
      } catch (error) {
        console.log("Error fetching starship data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStarships();
  }, []);

  // Display activityIndicator while loading is true
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading Starships...</Text>
      </SafeAreaView>
    );
  }

  // Displaying the data in a FlatList
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Starships in Star Wars:</Text>
      <SafeAreaView style={styles.displayArea}>
        <FlatList
          data={starships}
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

export default StarshipScreen;
