import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../styles";

const Task = (props) => {
  return (
    <SafeAreaView style={styles.item}>
      <SafeAreaView style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.circular}></SafeAreaView>
    </SafeAreaView>
  );
};

export default Task;
