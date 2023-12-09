import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LatarPage({ children }) {
  return (
    <SafeAreaView className="flex-1 bg-[#F2E5E5]">{children}</SafeAreaView>
  );
}
