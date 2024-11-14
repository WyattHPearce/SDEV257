`
  Name: Wyatt H. Pearce
  Date: 11/12/2024
  Description:
    The following is my work on a todo list app I am making
    while following along with the following youtube tutorial:
    https://youtu.be/0kL6nhutjQ8?si=rLU9uuJit_-iC__s
`;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";

import styles from "./styles";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  // "task" is task name, "setTask" is function
  // used for task (ie, setTask("walking_dog") )

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      console.log("Task items1: " + taskItems);
      setTaskItems([...taskItems, task]);
      setTask(null);

      console.log("Task: " + task);
      console.log("Task items2: " + taskItems);
    } else {
      console.log("Task: " + task);
      console.log("Task items2: " + taskItems);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Today's Tasks */}
      <SafeAreaView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <SafeAreaView style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      </SafeAreaView>

      {/* Write a task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <SafeAreaView style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </SafeAreaView>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
