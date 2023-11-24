import { View, Text } from "react-native";
import React from "react";

export default function OrderDetailBox({ datetime, address, delivery }) {
  return (
    <View className="flex flex-col gap-y-2">
      <View className="flex flex-row gap-x-2">
        <Text className="w-1/3 font-light text-emperor">Tailored in</Text>
        <Text>{datetime}</Text>
      </View>
      <View className="flex flex-row gap-x-2">
        <Text className="w-1/3 font-light text-emperor">Delivery Address</Text>
        <Text className="w-2/3">{address}</Text>
      </View>
      <View className="flex flex-row gap-x-2">
        <Text className="w-1/3 font-light text-emperor">Estimated Time</Text>
        <Text className="">{delivery}</Text>
      </View>
    </View>
  );
}
