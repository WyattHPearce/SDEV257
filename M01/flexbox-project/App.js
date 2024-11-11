import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        <Text style={styles.boxText}>I'm in a box</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
