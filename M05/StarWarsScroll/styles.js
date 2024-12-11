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
    height: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
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
});
