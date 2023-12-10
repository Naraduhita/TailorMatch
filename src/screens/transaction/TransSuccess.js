import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export default function TransSuccess({ navigation }) {
  const route = useRoute();
  const { total, order_id, user_id, isUser, state } = route.params;

  return (
    <Background>
      <View className="flex-col items-center justify-center h-full mx-4">
        <View className="items-center">
          <Image
            source={require("../../components/img/success.png")}
            className="w-32 h-32"
          />
          <Text className="mt-4 text-2xl font-bold text-white">
            Rp. {total}
          </Text>
          <Text className="text-lg font-semibold text-white">
            Payment sent succesfully!
          </Text>
          <Text className="mt-2 text-center text-white font-sm text-md">
            Thank you for your payment! Your order has been processed and will
            be shipped to you shortly.
          </Text>
        </View>
        <TouchableOpacity
          className="w-full"
          onPress={() =>
            navigation.navigate("view-cart", {
              order_id,
              user_id,
              state,
              isUser,
            })
          }>
          <View className="p-4 mt-4 bg-white shadow-sm rounded-xl ">
            <Text className="text-sm font-semibold text-center text-pink">
              Start Measuring
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full p-4 mt-2 border border-white shadow-sm rounded-xl"
          onPress={() => navigation.navigate("main")}>
          <Text className="text-sm font-semibold text-center text-white">
            Back Home
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
