import { View, Text } from "react-native";
import React from "react";

export default function IconWithTitleSewing({ children, title }) {
  return (
    <View className="flex flex-col items-center justify-center -mt-5">
      <View className="bg-concrete">{children}</View>
      <Text className="font-light">{title}</Text>
    </View>
  );
}
