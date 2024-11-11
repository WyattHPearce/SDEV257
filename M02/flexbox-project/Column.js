import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";
import styles from "./styles";

export default function Column({ children }) {
  return <SafeAreaView style={styles.column}>{children}</SafeAreaView>;
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
};
