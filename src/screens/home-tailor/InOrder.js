import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";

export default function InOrder({ navigation }) {
  return (
    <SafeAreaView className="flex-1 container">
      <View className="w-full top-0 absolute h-20">
        <View className="flex-row items-center justify-between px-8  mt-10 ">
          <View className="mx-auto flex-col items-center">
            <Text className="text-lg font-semibold ">In Order</Text>
            <Text>Sweetest Stitch</Text>
          </View>
        </View>
      </View>

      {/* isi card */}
      <ScrollView>
        <View className="flex-col items-center mt-24">
          <View className="bg-white p-4 shadow-sm rounded-xl w-80 items-center">
            <View className="flex-row justify-between items-center w-80 ">
              <Text className=" text-sm font-bold mx-8">
                Adiba Zalfa Camilla
              </Text>
              <View className="rounded-full bg-yellow px-4 py-1 mr-6">
                <Text className=" text-sm text-white font-bold">Ongoing</Text>
              </View>
            </View>

            <Text className="mt-2 text-sm text-grayText">
              Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
            </Text>
            <View className="mt-3 flex items-center border-b-2 border-b-gray w-80" />
            <Text className="mt-2 text-sm text-grayText w-80 ml-16">
              Send before November 30, 2023
            </Text>
          </View>
        </View>

        <View className="flex-col items-center mt-2">
          <View className="bg-white p-4 shadow-sm rounded-xl w-80 items-center">
            <View className="flex-row justify-between items-center w-80 ">
              <Text className=" text-sm font-bold mx-8">
                Adiba Zalfa Camilla
              </Text>
              <View className="rounded-full bg-red px-4 py-1 mr-6">
                <Text className=" text-sm text-white font-bold">Cancelled</Text>
              </View>
            </View>

            <Text className="mt-2 text-sm text-grayText">
              Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
            </Text>
            <View className="mt-3 flex items-center border-b-2 border-b-gray w-80" />
            <Text className="mt-2 text-sm text-grayText w-80 ml-16">
              Send before November 30, 2023
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("order-num")}>
          <View className="p-4 bg-maroon w-80 rounded-xl items-center mx-auto mt-48">
            <Text className="font-bold text-white ">Create New Order</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
