import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import ItemHistory from "../components/Card/ItemHistory";

export default function History({ navigation }) {
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
              // <View className="items-center justify-around flex-row mt-6 bg-white w-full py-2 rounded-lg">
              //   <View className="flex flex-row justify-between mx-3">
              //     <View className="flex-col items-center justify-center gap-1.5">
              //       <Text className="font-semibold">{item.name}</Text>
              //       <Text>{item.date}</Text>
              //     </View>
              //   </View>
              //   {/* bikin View baru + tambahin tag center */}
              //   <Text
              //     className={`text-white font-medium rounded-md px-2 py-0.5 ${colorStatus(
              //       item.status,
              //     )}`}>
              //     {item.status}
              //   </Text>
              // </View>
              <ItemHistory
                item={item}
                colorStatus={colorStatus}
              />
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
