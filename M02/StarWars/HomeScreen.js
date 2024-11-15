import * as React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Star Wars App - Home Page</Text>
  </SafeAreaView>
);

export default HomeScreen;
