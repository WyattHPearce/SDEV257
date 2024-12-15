// Imports
import React, { startTransition, useEffect, useState } from "react";
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

const StarshipScreen = ({ navigation }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemSwiped, setItemSwiped] = useState("");
  // Dialog Message Handling
  const [modalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!modalVisible);
  }

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
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.title}>Starships in Star Wars:</Text>
    //   <SafeAreaView style={styles.displayArea}>
    //     <FlatList
    //       data={starships}
    //       keyExtractor={(item) => item.name}
    //       renderItem={({ item }) => (
    //         <SafeAreaView style={styles.item}>
    //           <Text style={styles.itemTitle}>{item.name}</Text>
    //           <Text style={styles.itemSubtitle}>{item.url}</Text>
    //         </SafeAreaView>
    //       )}
    //     />
    //   </SafeAreaView>
    // </SafeAreaView>

    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.title}>Starships in Star Wars:</Text>

        <SafeAreaView style={styles.displayArea}>
          <ScrollView>
            {starships.map((item) => (
              <Swipeable
                key={item.name}
                renderRightActions={() => renderRightActions(item.name)}
                onSwipeableRightOpen={() => {
                  setItemSwiped(item.name);
                  toggleModal(); // Toggle the modal right after setting the swiped item
                }}
              >
                <SafeAreaView style={styles.item}>
                  <Text style={styles.itemTitle}>{item.name}</Text>
                  <Text style={styles.itemSubtitle}>{item.url}</Text>
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

export default StarshipScreen;
