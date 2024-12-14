import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center-top",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontStyle: "bold",
    margin: 15,
  },
  displayArea: {
    flex: 1,
    flexDirection: "column", // Stacks elements vertically
    alignSelf: "stretch",
    justifyContent: "flex-start", // Aligns items at the top of the space
    paddingHorizontal: 15,
    fontSize: 16,
    alignItems: "center", // Centers items horizontally
    textAlign: "center",
  },
  refreshButton: {
    paddingVertical: 15,
  },
  infoItems: {
    backgroundColor: "white",
    padding: 7,
    margin: 4,
    borderRadius: 10,
  },
});
