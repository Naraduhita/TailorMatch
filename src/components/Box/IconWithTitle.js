import { View, Text } from "react-native";
import React from "react";

export default function IconWithTitle({ children, title }) {
  return (
    <View className="flex flex-col items-center justify-center">
      <View className="bg-concrete">{children}</View>
      <Text className="font-light">{title}</Text>
    </View>
  );
}
