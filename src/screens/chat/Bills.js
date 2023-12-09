import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";

export default function Bills({ navigation }) {
  return (
    <SafeAreaView className="container flex-1">
      <View className="w-full top-0 absolute h-20">
        <View className="flex-row items-center justify-between px-8  mt-10 ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <View className="mx-auto flex-col items-center">
            <Text className="text-lg font-semibold ">Bills</Text>
            <Text>Sweetest Stitch</Text>
          </View>
        </View>
      </View>

      <View className="flex-col items-center mt-24">
        <View className="flex-row justify-between bg-white p-6 shadow-sm rounded-xl mb-3 w-80">
          <Text className=" text-sm font-semibold">(1) Party Dress</Text>
          <Text className=" text-sm font-semibold">Rp. 500.000</Text>
        </View>
        <View className="flex-row justify-between bg-white p-6 shadow-sm rounded-xl mb-3 w-80">
          <Text className=" text-sm font-semibold">(1) Pajamas Set</Text>
          <Text className=" text-sm font-semibold">Rp. 200.000</Text>
        </View>
        <View className="flex-row justify-between bg-white p-6 shadow-sm rounded-xl mb-3 w-80">
          <Text className=" text-sm font-semibold">(1) Daily Wear Set</Text>
          <Text className=" text-sm font-semibold">Rp. 200.000</Text>
        </View>
      </View>

      <View className="flex-col items-center mt-36">
        <View className="flex-row justify-between bg-white p-6 shadow-sm rounded-xl mb-3 w-80">
          <Text className=" text-sm font-semibold">Total</Text>
          <Text className=" text-sm font-semibold">Rp. 900.000</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("transaction")}>
          <View className="flex bg-pink p-6 shadow-sm rounded-xl w-80">
            <Text className=" text-sm text-white font-bold text-center">
              Agree
            </Text>
          </View>
        </TouchableOpacity>
        <View className="w-80 mt-2">
          <Text className=" text-xs font-sm text-center">
            By clicking the "Agree" button, you are entering into a binding
            agreement with Tailor Match purchase the products or services you
            have selected.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
