import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackArrowView from "../../../assets/back-Arrow.svg";
import { useNavigation } from "@react-navigation/native";

export default function ItemCart({ items }) {
  const navigation = useNavigation();

  const renderCartItem = (item) => (
    <TouchableOpacity
      key={item.Clothes.id}
      className="w-full"
      onPress={() => navigation.navigate("measuring", item)}>
      <View
        View
        className="flex flex-row items-center justify-between w-full px-5 py-4 mt-3 bg-white rounded-2xl">
        <View className="flex flex-row">
          <Text>({item.Clothes.quantity})</Text>
          <Text className="mx-2">{item.Clothes.name}</Text>
        </View>
        <BackArrowView />
      </View>
    </TouchableOpacity>
  );

  return items.map((item) => renderCartItem(item));
}
