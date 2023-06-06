import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
          >
            {route.params.photos.slice(0, 4).map((photo) => (
              <View style={{ margin: 6 }}>
                <Image
                  style={{
                    marginLeft: 20,
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}
          </TouchableOpacity>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons
                  style={{ marginLeft: 20, marginBottom: 50 }}
                  name="stars"
                  size={40}
                  color="green"
                />
                <Text
                  style={{ marginBottom: 50, fontSize: 20, fontWeight: "bold" }}
                >
                  {route.params.rating}
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
            1 Gecelik Fiyat ve {route.params.adults} Yetişkin
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Giriş Tarihi
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Çıkış Tarihi
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>
          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Odalar ve Misafirler
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.rooms} oda {route.params.adults} yetişkin
              {route.params.children} çocuk
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Amenities />

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>

      {/**<TouchableOpacity
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availabilty
        </Text>
      </TouchableOpacity> */}
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
