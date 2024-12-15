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
  textInput: {
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 10,
    margin: 15,
    borderRadius: 10,
    height: 35,
    fontSize: 11,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    margin: 5,
    color: "slategrey",
    fontWeight: "bold",
  },
  modalButton: {
    margin: 5,
    color: "slategrey",
  },
});
