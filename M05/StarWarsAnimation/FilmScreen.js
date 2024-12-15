// Imports
import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import axios from "axios";
// Local Imports
import styles from "./styles";
import ModalDialog from "./ModalDialog";

const FilmScreen = ({ navigation }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemSwiped, setItemSwiped] = useState("");
  // Dialog Message Handling
  const [modalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!modalVisible);
  }

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

  // Called when item is swiped to display swipe button
  const renderRightActions = (itemName) => {
    return (
      <SafeAreaView style={styles.swipeBackground}>
        <Text style={styles.swipeText}>Swiped!</Text>
      </SafeAreaView>
    );
  };

  // Displaying the data in a FlatList
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.title}>Films in Star Wars:</Text>

        <SafeAreaView style={styles.displayArea}>
          <ScrollView>
            {films.map((item) => (
              <Swipeable
                key={item.name}
                renderRightActions={() => renderRightActions(item.name)}
                onSwipeableRightOpen={() => {
                  setItemSwiped(item.properties.title);
                  toggleModal(); // Toggle the modal right after setting the swiped item
                }}
              >
                <SafeAreaView style={styles.item}>
                  <Text style={styles.itemTitle}>{item.properties.title}</Text>
                  <Text style={styles.itemSubtitle}>
                    Released on {item.properties.release_date}
                  </Text>
                </SafeAreaView>
              </Swipeable>
            ))}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
      <ModalDialog
        title={"You swiped: " + itemSwiped}
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
    </GestureHandlerRootView>
  );
};

export default FilmScreen;
