import React, { useLayoutEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapScreen() {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Gezilecek Yerler",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 200,
      },
      headerStyle: {
        backgroundColor: "#0047AB",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
