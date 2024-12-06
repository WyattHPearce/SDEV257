// Imports
import React, { useState } from "react";
import { Text, TextInput, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Local Imports
import styles from "./styles";
import Input from "./Input";
import ModalDialog from "./ModalDialog";

function HomeScreen({ navigation }) {
  // Search bar handling
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  // Dialog Message Handling
  const [modalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  // Renderings
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Star Wars App - Home Page</Text>
      <Input
        label="Home Search:"
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
      <ModalDialog
        title={"You entered: " + submittedText}
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
