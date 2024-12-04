import React, { useState, useEffect } from "react";
import { View, StatusBar, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  // Copied code from "WhereAmI" program to get users location
  const [location, setLocation] = useState();

  // Getting the users location from device
  useEffect(() => {
    let watcher;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        setLocation
      );
    })();

    return () => {
      watcher?.remove();
    };
  }, []);

  // Location fetch was async so wait for it to return
  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  // Render location once it is obtained
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        initialRegion={{
          latitude: location.coords.latitude, // Access latitude via coords
          longitude: location.coords.longitude, // Access longitude via coords
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.7248, longitude: -86.2859 }}
          pinColor={"red"} // any color
          title={"McDonalds"}
          description={
            "Classic, long-running fast-food chain known for its burgers & fries."
          }
        />
      </MapView>
    </View>
  );
}
