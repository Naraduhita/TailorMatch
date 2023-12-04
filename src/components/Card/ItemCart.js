import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackArrowView from "../../../assets/back-Arrow.svg";

export default function ItemCart({ navigation, items }) {
  const navigateToMeasuring = (screen) => {
    navigation.navigate(screen);
  };

  const renderCartItem = (title, count, screen, id) => (
    <View key={id}>
      <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
        <View className="flex flex-row">
          <Text>({count})</Text>
          <Text className="mx-2">{title}</Text>
        </View>
        <BackArrowView />
      </View>
    </View>
  );

  return items.map((item) =>
    renderCartItem(
      item.Clothes.name,
      item.Clothes.quantity,
      "measuring-party",
      item.Clothes.id,
    ),
  );
}
