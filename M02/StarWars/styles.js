import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center-top",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontStyle: "bold",
    margin: 15,
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
