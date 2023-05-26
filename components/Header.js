import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { StackRouter } from "@react-navigation/native";
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#2A52BE",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Ionicons name="md-bed-outline" size={30} color="white" />
        <Text
          style={{
            marginL7: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Yatak
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="flight" size={24} color="white" />
        <Text
          style={{
            marginL7: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Uçuşlar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AntDesign name="car" size={24} color="white" />
        <Text
          style={{
            marginL7: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Araba Kiralama
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FontAwesome name="taxi" size={24} color="white" />
        <Text
          style={{
            marginL7: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Taksi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
