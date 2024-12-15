import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable } from "react-native";
import Animated, {
  SlideInLeft,
  SlideOutRight,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import styles from "./styles";

function HomeScreen({ navigation }) {
  // Shared value for scale
  const scale = useSharedValue(1);

  // State to hold the displayed message
  const [message, setMessage] = useState("Press the button to begin!");
  const [key, setKey] = useState(0); // A key to force message re-render for animations

  // Array of interesting messages
  const messages = [
    "The Force will be with you, always.",
    "Do or do not. There is no try.",
    "I find your lack of faith disturbing.",
    "In a galaxy far, far away...",
    "These aren’t the droids you’re looking for.",
    "Stay on target!",
    "May the Force be with you!",
  ];

  // Animated style based on scale
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  // Handle button press events
  const handlePressIn = () => {
    scale.value = withSpring(0.9, { damping: 5 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 5 });
  };

  // Update the message on button press
  const handlePress = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
    setKey((prevKey) => prevKey + 1); // Update the key to re-render the Animated.Text
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Star Wars App - Home Page</Text>
      <SafeAreaView style={styles.displayArea}>
        <Text style={styles.descriptionText}>
          This app allows users to query SWAPI (StarWarsAPI) data and view it in
          lists. Press on the navigation selector to get started!
        </Text>

        <Animated.Text
          entering={SlideInLeft}
          exiting={SlideOutRight}
          key={key}
          style={styles.message}
        >
          {message}
        </Animated.Text>
        <Animated.View style={[styles.button, animatedStyle]}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            style={styles.pressableArea}
          >
            <Text style={styles.buttonText}>Press Me</Text>
          </Pressable>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default HomeScreen;
