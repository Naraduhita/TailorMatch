import { View, Text, Image } from "react-native";
import React from "react";

export default function IconSewing() {
  return (
    <View className="w-full flex flex-col mb-5 items-center justify-center">
      <Image
        source={require("../../../assets/detailorder3.png")}
        className="self-center w-50 h-50"
      />
      <Text className="mt-5 text-center w-3/4 text-sm font-light">
        Your clothes are still being tailored, but we expect them to be finished
        soon.
      </Text>
    </View>
  );
}
