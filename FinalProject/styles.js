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
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayArea: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    alignItems: "center",
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInputContainer: {
    alignSelf: "stretch",
    marginBottom: 30,
    alignItems: "center",
  },
  textInputLabel: {
    marginBottom: 4,
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
