import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";

export default function Transaction({ navigation }) {
  return (
    <SafeAreaView className="container flex-1">
      <View className="w-full top-0 absolute h-20">
        <View className="flex-row items-center justify-between px-8  mt-10 ">
          <TouchableOpacity onPress={() => navigation.navigate("detail-chat")}>
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <View className="mx-auto flex-col items-center">
            <Text className="text-lg font-semibold ">Payment</Text>
            <Text>Sweetest Stitch</Text>
          </View>
        </View>
      </View>

      <View className="flex-col items-center mt-24">
        <View className="bg-white p-4 shadow-sm rounded-xl">
          <View className="flex-col w-80">
            <Text className="text-sm font-bold mb-2">Adiba Zalfa Camila</Text>
            <Text className="text-sm mb-2">
              Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya.
            </Text>
            <Text className="text-sm">3 items</Text>
          </View>
        </View>

        <View className="bg-white p-4 shadow-sm rounded-xl mt-3">
          <View className="flex-row w-80 justify-between items-center">
            <Text className="text-sm font-bold mb-2">Your total bill is</Text>
            <Text className="text-lg font-bold  mb-2">Rp. 900.000</Text>
          </View>
          <Text className="w-80 text-sm ">
            Please choose your preffered payment method
          </Text>
        </View>
      </View>

      <View className="flex-col mt-10 ">
        <Text className="font-bold text-lg mx-8">Payment Method</Text>
        <View className="bg-white p-4 shadow-sm items-center rounded-xl w-5/6 mx-auto mt-2">
          <TouchableOpacity onPress={() => navigation.navigate("failed")}>
            <View className="border rounded-lg p-4 w-80">
              <Text className="font-bold text-sm">GoPay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("success")}>
            <View className="border rounded-lg p-4 w-80 mt-3">
              <Text className="font-bold text-sm">OVO</Text>
            </View>
          </TouchableOpacity>
          <View className="border rounded-lg p-4 w-80 mt-3">
            <Text className="font-bold text-sm">Shopee Pay</Text>
          </View>
          <View className="mt-3">
            <Text className="font-bold text-sm underline underline-offset-8">
              Add New Method
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
