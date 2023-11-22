import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../../components/Background";

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
            source={require("../../../assets/tabler_hanger-off.png")}
            className="w-24 h-24"
          />
          <Text
            className="text-black font-bold text-lg"
            onPress={() => navigation.navigate("History")}
          >
            No tailor history yet
          </Text>
          <Text className="text-black mt-3">Embrace the blank canvas</Text>
          <Text className="text-black">
            and start your tailoring journey today!
          </Text>
        </>
      ) : (
        <FlatList
          keyExtractor={(item) => item.key}
          data={store}
          renderItem={({ item }) => (
            <View className="items-center justify-center flex-row mt-10">
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
