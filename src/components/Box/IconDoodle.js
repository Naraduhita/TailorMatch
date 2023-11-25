import { View, Text, Image, textShadow } from "react-native";
import React from "react";
import ThreadSymbol from "../../../assets/thread.svg";

export default function IconDoodle() {
  return (
    <View className="mx-10 items-center mt-4">
      <View className="rounded-md flex flex-col justify-center items-center">
        <ThreadSymbol />
        <Text
          className="mt-4 px-1 text-center text-xs font-light"
          style={{
            textShadow: "0 1px 2px 1px,",
          }}>
          Doodle Thread is your one-stop shop for effortless everyday style. We
          believe that fashion should be fun, accessible, and always on point.
          That's why we've curated a collection of stylish and comfortable
          pieces that will take you from day to night in style.
        </Text>
      </View>
    </View>
  );
}
