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
      <View className="absolute top-0 w-full h-20">
        <View className="flex-row items-center justify-between px-8 mt-10 ">
          <View className="flex-col items-center mx-auto">
            <Text className="text-lg font-semibold ">In Order</Text>
            <Text>Sweetest Stitch</Text>
          </View>
        </View>
      </View>

      {/* isi card */}
      <ScrollView>
        <TouchableOpacity
          className="flex-col items-center mt-24"
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
                <Text className="text-sm font-bold text-white ">Cancelled</Text>
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

        <TouchableOpacity
          onPress={() => navigation.navigate("create-order-tailor")}>
          <View className="items-center p-4 mx-auto mt-48 bg-maroon w-80 rounded-xl">
            <Text className="font-bold text-white ">Create New Order</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
