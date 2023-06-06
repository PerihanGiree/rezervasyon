import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Oda Servisi",
    },
    {
      id: "2",
      name: "Ücretsiz wifi",
    },
    {
      id: "3",
      name: "Aile Odası",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "Yüzme Havuzu",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness merkezi",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "600" }}>Olanaklar</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {services.map((item, index) => (
          <View
            style={{
              margin: 10,
              backgroundColor: "#007FFF",
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
              width: 100,
            }}
            key={index}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
