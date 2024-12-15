import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center-top",
    alignItems: "center",
  },
  safeContainer: {
    flex: 1,
    justifyContent: "center-top",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
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
  center: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
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
  item: {
    borderRadius: 15,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "white",
  },
  itemTitle: {
    padding: 8,
    fonstSize: 10,
    fontWeight: "bold",
  },
  itemSubtitle: {
    padding: 8,
    fonstSize: 10,
  },
  swipeBackground: {
    backgroundColor: "lime",
    justifyContent: "center",
    padding: 20,
  },
  swipeText: {
    color: "white",
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
  message: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
    paddingHorizontal: 20,
    color: "#333",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#6200ea",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
