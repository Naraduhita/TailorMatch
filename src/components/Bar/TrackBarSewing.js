import { View, Text } from "react-native";
import React from "react";

export default function TrackBarSewing({ children }) {
  return (
    <View className="relative flex flex-row justify-around w-full">
      <View className="absolute w-5/6 mx-auto border-b-2 border-dotted left-8 top-1 border-old-rose"></View>
      {children}
    </View>
  );
}
