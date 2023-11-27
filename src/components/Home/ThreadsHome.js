import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function ThreadsHome({ children, tailor }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 mt-16">
        <View className="flex flex-col items-start justify-center flex-1 pb-16 mx-5">
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
            <Text className="w-full text-lg font-normal text-center">
              {tailor.name}
            </Text>
          </View>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
