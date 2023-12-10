import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View className="items-center justify-center flex-1 bg-[#F2E5E5]">
      <ActivityIndicator
        size={"small"}
        color={"#545454"}
      />
    </View>
  );
}
