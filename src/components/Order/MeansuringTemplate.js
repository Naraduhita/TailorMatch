import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function MeansuringTemplate({ children, title }) {
  const navigation = useNavigation();

  const handleBack = () => {
    if (route.name == "view-cart") {
      navigation.navigate("main");
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="relative justify-start h-full mx-5 gap-y-4">
        <View className="flex flex-row items-center justify-start">
          <TouchableOpacity
            onPress={handleBack}
            className="absolute z-10">
            <Feather
              name="arrow-left"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <View className="flex flex-col items-center justify-center w-full pt-6 gap-y-1">
            <Text className="w-full text-lg font-normal text-center">
              {title}
            </Text>
            <Text className="w-full font-light text-center">
              Sweetest Stitch
            </Text>
          </View>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}
