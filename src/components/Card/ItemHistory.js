// ItemHistory.js
import React from "react";
import { View, Text } from "react-native";

const ItemHistory = ({ item, colorStatus }) => {
  return (
    <View className="items-center justify-between flex-row mt-4 px-4 bg-white w-full py-2 rounded-lg">
      <View className="flex flex-row-2 w-1/2">
        <View className="flex-col gap-1.5">
          <Text className="font-semibold justify-start">{item.name}</Text>
          <Text>{item.date}</Text>
        </View>
      </View>
      <View className="w-1/2 flex">
        <View className="w-1/2 self-center">
          <Text
            className={`text-white text-center font-medium rounded-md px-2 py-0.5 text-xs ${colorStatus(
              item.status,
            )}`}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemHistory;
