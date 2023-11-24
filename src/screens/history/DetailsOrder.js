import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LatarPage from "../../components/LatarPage";

export default function DetailsOrder() {
  const navigation = useNavigation();

  const [detail, setdetail] = useState([
    {
      name: "Sweetest Stitch",
      date: "12 November 2023",
      key: "1",
      address: "Sutorejo Barat No.36, Dukuh Suterejo, Mulyosari, Surabaya",
      estimated: "Finish in 1 week",
      status: "Ongoing",
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
    <LatarPage>
      <View className="mt-16">
        <Text className="text-2xl font-medium text-center ">Details order</Text>
        <Text className="text-sm font-normal text-center">Sweetest Stitch</Text>
        <TouchableOpacity
          className="ml-8 mt-5"
          onPress={() => navigation.navigate("History")}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/detailorder.png")}
          className="w-50 h-50 self-center mt-8"
        />
        <View className="items-center mt-6">
          <Text>Your clothes are still being tailored,</Text>
          <Text>but we expect them to be finished soon.</Text>
        </View>
        <View className="mx-5">
          <FlatList
            data={detail}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View className="flex flex-col justify-between mt-4 px-4 w-full py-2">
                <View className="flex flex-row gap-1.5">
                  <View className="flex-col">
                    <Text className="font-light">Tailored in</Text>
                  </View>
                  <View className="flex-col pl-16">
                    <Text className="text-left">{item.date}</Text>
                  </View>
                </View>
                <View className="flex-row gap-1.5">
                  <View className="flex-col">
                    <Text className="font-light">Delivery Address</Text>
                  </View>
                  <View className="flex-col pl-6">
                    <Text className="text-left">{item.address}</Text>
                  </View>
                </View>
                <View className="flex-row gap-1.5">
                  <View className="flex-col">
                    <Text className="font-light">Estimated Time</Text>
                  </View>
                  <View className="flex-col pl-8">
                    <Text className="text-left">{item.estimated}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </LatarPage>
  );
}
