import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Background({ children }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F2E5E5]">
      {children}
    </SafeAreaView>
  );
}
