import * as React from "react";
import { Text, SafeAreaView, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BaseballScreen from "./BaseballScreen";
import SoccerScreen from "./SoccerScreen";
import FootballScreen from "./FootballScreen";
import DiscGolfScreen from "./DiscGolfScreen";

const BasketballScreen = ({ navigation }) => {
  const teams = ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls"];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Basketball Teams</Text>
      <FlatList
        style={styles.team}
        data={teams}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <Button
        title="Go to Baseball Teams"
        onPress={() => navigation.navigate("Baseball")}
      />
      <Button
        title="Go to Basketball Teams"
        onPress={() => navigation.navigate("Basketball")}
      />
      <Button
        title="Go to Soccer Teams"
        onPress={() => navigation.navigate("Soccer")}
      />
      <Button
        title="Go to Football Teams"
        onPress={() => navigation.navigate("Football")}
      />
      <Button
        title="Go to Disc Golf Teams"
        onPress={() => navigation.navigate("DiscGolf")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  team: {
    fonstSize: 18,
    marginBottom: 10,
  },
});

export default BasketballScreen;
