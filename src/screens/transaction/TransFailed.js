import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";

export default function TransFailed({ navigation }) {
  return (
    <Background>
      <SafeAreaView className="flex-1 container">
        <View className="items-center flex-col ">
          <View className="items-center w-80 mt-48">
            <Image
              source={require("../../components/img/failed.png")}
              className="w-32 h-32"
            />
            <Text className="font-bold text-white text-lg mt-4">
              Payment Failed
            </Text>
            <Text className="font-sm text-white  text-md mt-2 text-center">
              Your money has not been deducted from your account. You will not
              be charged for this transaction.
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("success")}>
            <View className="bg-white p-4 shadow-sm rounded-xl mt-8 ">
              <Text className="w-80 text-sm font-semibold text-pink text-center">
                Try Again
              </Text>
            </View>
          </TouchableOpacity>
          <View className="border border-white p-4 shadow-sm rounded-xl mt-2 ">
            <Text className="w-80 text-sm font-semibold text-white text-center">
              Back Home
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}
