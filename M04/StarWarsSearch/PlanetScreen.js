// Imports
import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";
import Input from "./Input";
import ModalDialog from "./ModalDialog";

const PlanetScreen = ({ navigation }) => {
  const planets = ["Example Planet 1", "Example Planet 2", "Example Planet 3"];

  // Search bar handling
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  // Dialog Message Handling
  const [modalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Planets from Star Wars</Text>
      <Input
        label="Planet Search:"
        placeholder="Type here..."
        onChangeText={(e) => {
          setChangedText(e);
        }}
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
          toggleModal();
        }}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
      />
      <FlatList
        style={styles.listItem}
        data={planets}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <ModalDialog
        title={"You entered: " + submittedText}
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
    </SafeAreaView>
  );
};

export default PlanetScreen;