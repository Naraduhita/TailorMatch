import { View, Text } from "react-native";
import React from "react";

export default function Background({ children }) {
  return <View className="flex-1 bg-[#BA7E80]">{children}</View>;
}
