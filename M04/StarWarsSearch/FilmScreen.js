// Imports
import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local imports
import styles from "./styles";
import Input from "./Input";
import ModalDialog from "./ModalDialog";

const FilmScreen = ({ navigation }) => {
  const films = ["Example Film 1", "Example Film 2", "Example Film 3"];

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
      <Text style={styles.title}>Star Wars Films</Text>
      <Input
        label="Films Search:"
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
        data={films}
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

export default FilmScreen;
