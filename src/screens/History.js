import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import ItemHistory from "../components/Card/ItemHistory";
import { useNavigation } from "@react-navigation/native";

export default function History() {
  const navigation = useNavigation();

  const [store, setStore] = useState([
    {
      name: "Sweetest Stitch",
      key: "1",
      date: "12 November 2023",
      status: "Ongoing",
    },
    {
      name: "Doodled Threads",
      key: "2",
      date: "23 November 2023",
      status: "Done",
    },
    { name: "Ruffled Rose", key: "3", date: "12 June 2023", status: "Ongoing" },
    {
      name: "Sugar Plum Closet",
      key: "4",
      date: "9 June 2023",
      status: "Done",
    },
    {
      name: "Cuddly Couture",
      key: "5",
      date: "1 June 2023",
      status: "Cancelled",
    },
  ]);

  const colorStatus = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-yellow";
      case "Done":
        return "bg-green";
      case "Cancelled":
        return "bg-red";
      default:
        return "";
    }
  };

  return (
    <Background>
      {store.length === 0 ? (
        <>
          <Image
            source={require("../../assets/tabler_hanger-off.png")}
            className="w-24 h-24"
          />
          <Text
            className="text-lg font-bold text-black"
            onPress={() => navigation.navigate("History")}>
            No tailor history yet
          </Text>
          <Text className="mt-3 text-black">Embrace the blank canvas</Text>
          <Text className="text-black">
            and start your tailoring journey today!
          </Text>
        </>
      ) : (
        <View className="mx-5">
          <FlatList
            keyExtractor={(item) => item.key}
            data={store}
            renderItem={({ item }) => (
              <ItemHistory
                item={item}
                colorStatus={colorStatus}
                onPress={() => navigation.navigate("deliver")}
              />
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
