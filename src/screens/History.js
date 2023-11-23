import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function History({ navigation }) {
  const [store, setStore] = useState([
    { name: "Sweetest Stitch", key: "1", date: "12 November 2023" },
    { name: "Doodled Threads", key: "2", date: "23 November 2023" },
    { name: "Ruffled Rose", key: "3", date: "12 June 2023" },
    { name: "Sugar Plum Closet", key: "4", date: "9 June 2023" },
    { name: "Cuddly Couture", key: "5", date: "1 June 2023" },
  ]);

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
              <TouchableOpacity
                className="flex-row items-center justify-around w-full py-2 mt-6 bg-white rounded-lg"
                key={item.key}
                onPress={() => navigation.navigate("deliver")}>
                {/* <Text>{item.name}</Text> */}
                <View className="flex flex-row justify-between mx-3">
                  <View className="flex-col items-center justify-center gap-1.5">
                    <Text className="font-semibold">{item.name}</Text>
                    <Text>{item.date}</Text>
                  </View>
                </View>
                <Text className="bg-yellow text-white font-medium rounded-md px-2 py-0.5">
                  Ongoing
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
