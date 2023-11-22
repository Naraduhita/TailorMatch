import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function History({ navigation }) {
  const [store, setStore] = useState([
    { name: "Sweetest Stitch", key: "1" },
    { name: "Doodled Threads", key: "2" },
    { name: "Ruffled Rose", key: "3" },
    { name: "Sugar Plum Closet", key: "4" },
    { name: "Cuddly Couture", key: "5" },
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
            className="text-black font-bold text-lg"
            onPress={() => navigation.navigate("History")}>
            No tailor history yet
          </Text>
          <Text className="text-black mt-3">Embrace the blank canvas</Text>
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
              <View className="items-center justify-around flex-row mt-6 bg-white w-full py-2 rounded-lg">
                {/* <Text>{item.name}</Text> */}
                <View className="flex flex-row justify-between mx-3">
                  <View className="flex-col items-center justify-center gap-1.5">
                    <Text className="font-semibold">Sweetest Stitch</Text>
                    <Text>12 November</Text>
                  </View>
                </View>
                <Text className="bg-yellow text-white font-medium rounded-md px-2 py-0.5">
                  Ongoing
                </Text>
              </View>
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
