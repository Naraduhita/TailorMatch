// ItemHistory.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ItemHistory = ({ item, colorStatus, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between w-full px-4 py-2 mt-4 bg-white rounded-lg"
      onPress={onPress}>
      <View className="flex w-1/2 flex-row-2">
        <View className="flex-col gap-1.5">
          <Text className="justify-start font-semibold">{item.name}</Text>
          <Text>{item.date}</Text>
        </View>
      </View>
      <View className="flex w-1/2">
        <View className="self-center w-1/2">
          <Text
            className={`text-white text-center font-medium rounded-md px-2 py-0.5 text-xs ${colorStatus(
              item.status,
            )}`}>
            {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHistory;
