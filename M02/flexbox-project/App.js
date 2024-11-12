`
  Name: Wyatt H. Pearce
  Date: 11/11/2024
  Description:
    The following is code I transcribed from an example 
    github repo as part of my coursework in M02 of 
    the SDEV257 class at IvyTech
`;

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styles from "./styles";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#5</Box>
          <Box>#6</Box>
        </Column>
        <Column>
          <Box>#7</Box>
          <Box>#8</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#9</Box>
          <Box>#10</Box>
        </Column>
        <Column>
          <Box>#11</Box>
          <Box>#12</Box>
        </Column>
      </Row>
    </SafeAreaView>
  );
}