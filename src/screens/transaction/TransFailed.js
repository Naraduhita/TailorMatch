import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TransFailed() {
  const navigation = useNavigation();

  return (
    <Background>
      <View className="flex-col items-center justify-center h-full mx-4">
        <View className="items-center">
          <Image
            source={require("../../components/img/failed.png")}
            className="w-32 h-32"
          />
          <Text className="mt-4 text-lg font-bold text-white">
            Payment Failed
          </Text>
          <Text className="mt-2 text-center text-white font-sm text-md">
            Your money has not been deducted from your account. You will not be
            charged for this transaction.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-full">
          <View className="p-4 mt-8 bg-white shadow-sm rounded-xl ">
            <Text className="text-sm font-semibold text-center text-pink">
              Try Again
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
