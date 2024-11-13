import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import styles from "./styles";
import Task from "./components/Task";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Today's Tasks */}
      <SafeAreaView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <SafeAreaView style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
