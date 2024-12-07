import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";

import styles from "./styles";

const FilmScreen = ({ navigation }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API and put it in the corresponding array
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get("https://www.swapi.tech/api/films/");
        console.log("API response:", response.data.result); // Log the API response
        setFilms(response.data.result);
      } catch (error) {
        console.log("Error fetching film data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  // Display activityIndicator while loading is true
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading Films...</Text>
      </SafeAreaView>
    );
  }

  // Displaying the data in a FlatList
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Star Wars Films:</Text>
      <SafeAreaView style={styles.displayArea}>
        <FlatList
          data={films}
          keyExtractor={(item) => item.properties.title}
          renderItem={({ item }) => (
            <SafeAreaView style={styles.item}>
              <Text style={styles.itemTitle}>{item.properties.title}</Text>
              <Text style={styles.itemSubtitle}>
                Released on {item.properties.release_date}
              </Text>
            </SafeAreaView>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default FilmScreen;
