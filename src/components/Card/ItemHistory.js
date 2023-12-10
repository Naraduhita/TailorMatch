import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColoredBox from "../Box/ColoredBox";

const ItemHistory = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      className="mx-2"
      onPress={onPress}>
      <View className="flex-row items-center justify-between w-full px-5 py-2 mt-4 bg-white rounded-2xl">
        <View className="flex w-1/2 flex-row-2">
          <View className="flex-col gap-1.5">
            <Text className="justify-start font-semibold">{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        </View>
        <View className="flex w-1/2">
          <View className="self-center w-2/3">
            <ColoredBox status={item.state} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHistory;
