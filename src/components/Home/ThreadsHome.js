import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function ThreadsHome({ children }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <SafeAreaView className="flex-1 mt-16 ">
        <View className="flex flex-col items-start justify-center flex-1 mx-5 pb-16">
          <View className="flex flex-row items-center justify-start">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute z-10">
              <Feather
                name="arrow-left"
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <View className="flex flex-col items-center justify-center w-full gap-y-1">
              <Text className="w-full text-lg font-normal text-center">
                Doodled Threads
              </Text>
              <Text className="w-full font-light text-center">Daily Wear</Text>
            </View>
          </View>
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
