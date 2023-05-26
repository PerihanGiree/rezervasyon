import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import {
  BottomModal,
  ModalButton,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  console.log(selectedDates);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "TatilBudur.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 120,
      },
      headerStyle: {
        backgroundColor: "#0047AB",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Kaydet"
      />
    );
  };

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#CCCCFF",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/**Açıklama  */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#CCCCFF",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder="Aradığınız adresi girin" />
            </TouchableOpacity>

            {/**Select Date */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#CCCCFF",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <FontAwesome5 name="calendar-alt" size={24} color="black" />

              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#0047AB",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Tarihinizi Şeçin"}
                mode={"range"}
              />
            </TouchableOpacity>
            {/**Rooms and Guests */}
            <TouchableOpacity
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#CCCCFF",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="#E97451"
                placeholder={`${rooms} room - ${adults} adults -${children} children`}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 10,
              paddingVertical: 15,
              backgroundColor: "#007FFF",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Ara
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 15,
              marginHorizontal: 25,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            Güvenilir ve en hesaplı seyehat.
          </Text>
          <ScrollView
            horizontal
            style={{ marginHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#084c9e",
                borderRadius: 10,
                padding: 20,
                // marginLeft: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Dahil Hizmetler
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                Yemek ve konaklama hizmetimize dahil olan olanaklardır.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                // marginLeft: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                %10 İndirim
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Erken kayıt ile daha az ücretle mükemmel fırsatlar yakalayın.
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              textStyle={{ color: "white" }}
              text="Uygula"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
                marginHorizontal: 15,
                marginBottom: 50,
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Oda ve Konaklayan Sayısını Şeçiniz" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          {/**Oda sayısı seçme modelde */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Oda</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/**Yetişkin sayısı seçme modelde */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Yetişkin</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/**Çoçuk sayısı seçme modelde */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Çocuk</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
