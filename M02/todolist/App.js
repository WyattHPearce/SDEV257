`
  Name: Wyatt H. Pearce
  Date: 11/12/2024
  Description:
    The following is my work on a todo list app I am making
    while following along with the following youtube tutorial:
    https://youtu.be/0kL6nhutjQ8?si=rLU9uuJit_-iC__s
`;

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
