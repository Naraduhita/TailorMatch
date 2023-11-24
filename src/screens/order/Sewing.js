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

  return (
    <LatarPage>
      <View className="mt-16">
        <Text className="text-2xl font-medium text-center ">Details order</Text>
        <Text className="text-sm font-normal text-center">Sweetest Stitch</Text>
        <TouchableOpacity
          className="mt-5 ml-8"
          onPress={() => navigation.navigate("History")}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/detailorder.png")}
          className="self-center mt-8 w-50 h-50"
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
              <View className="flex flex-col justify-between w-full px-4 py-2 mt-4">
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
