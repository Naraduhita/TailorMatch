import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function InOrder() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col h-full mx-5 gap-y-4">
        <View className="w-full">
          <View className="flex-row items-center justify-between">
            <View className="flex-col items-center mx-auto">
              <Text className="text-lg font-semibold ">In Order</Text>
              <Text>Sweetest Stitch</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("create-order-tailor")}
          className="absolute z-10 w-full bottom-3">
          <View className="items-center w-full p-4 bg-maroon rounded-xl">
            <Text className="font-bold text-white ">Create New Order</Text>
          </View>
        </TouchableOpacity>

        {/* isi card */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            className="flex-col items-center"
            onPress={() => navigation.navigate("order-num")}>
            <View className="items-center p-4 bg-white shadow-sm rounded-xl w-80">
              <View className="flex-row items-center justify-between w-80 ">
                <Text className="mx-8 text-sm font-bold ">
                  Adiba Zalfa Camilla
                </Text>
                <View className="px-4 py-1 mr-6 rounded-full bg-yellow">
                  <Text className="text-sm font-bold text-white ">Ongoing</Text>
                </View>
              </View>

              <Text className="mt-2 text-sm text-grayText">
                Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
              </Text>
              <View className="flex items-center mt-3 border-b-2 border-b-gray w-80" />
              <Text className="mt-2 ml-16 text-sm text-grayText w-80">
                Send before November 30, 2023
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-col items-center mt-2">
            <View className="items-center p-4 bg-white shadow-sm rounded-xl w-80">
              <View className="flex-row items-center justify-between w-80 ">
                <Text className="mx-8 text-sm font-bold ">
                  Adiba Zalfa Camilla
                </Text>
                <View className="px-4 py-1 mr-6 rounded-full bg-red">
                  <Text className="text-sm font-bold text-white ">
                    Cancelled
                  </Text>
                </View>
              </View>

              <Text className="mt-2 text-sm text-grayText">
                Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
              </Text>
              <View className="flex items-center mt-3 border-b-2 border-b-gray w-80" />
              <Text className="mt-2 ml-16 text-sm text-grayText w-80">
                Send before November 30, 2023
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
