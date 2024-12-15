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
    alignItems: "center", // Centers items horizontally
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    padding: 15,
    margin: 30,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  infoItems: {
    backgroundColor: "white",
    padding: 7,
    margin: 4,
    borderRadius: 10,
  },
  mapView: {
    alignSelf: "stretch",
    height: 350,
    margin: 30,
  },
});
