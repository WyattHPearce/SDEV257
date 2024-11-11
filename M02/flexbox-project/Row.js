import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";
import styles from "./styles";

export default function Row({ children }) {
  return <SafeAreaView style={styles.row}>{children}</SafeAreaView>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
