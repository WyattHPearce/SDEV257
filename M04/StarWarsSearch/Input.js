import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";

export default function Input(props) {
  return (
    <SafeAreaView style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props}></TextInput>
    </SafeAreaView>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};
