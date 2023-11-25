import { View, Text, Image } from "react-native";
import React from "react";

export default function IconSewing() {
  return (
    <View className="mx-10 -mt-5">
      <Image
        source={require("../../../assets/detailorder3.png")}
        className="self-center w-50 h-50"
      />
      <Text
        className="mt-5 text-center"
        style={{
          shadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        }}>
        Your clothes are still being tailored, but we expect them to be finished
        soon.
      </Text>
    </View>
  );
}
