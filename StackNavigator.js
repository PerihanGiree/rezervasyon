import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Anasayfa",
            tabBarActiveBackgroundColor: "#E0FFFF",
            tabBarActiveTintColor: "black",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={30} color="#0047AB" />
              ) : (
                <AntDesign name="hearto" size={30} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Kaydet",
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#E0FFFF",

            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={30} color="#0047AB" />
              ) : (
                <AntDesign name="home" size={30} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Rezervasyon",
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#E0FFFF",

            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={30} color="#0047AB" />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={30}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profil",
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#E0FFFF",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-person" size={30} color="#0047AB" />
              ) : (
                <Ionicons name="person-outline" size={30} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
