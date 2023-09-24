//Expo home screen with a text

import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreens() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>HomeScreens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  textTop: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
