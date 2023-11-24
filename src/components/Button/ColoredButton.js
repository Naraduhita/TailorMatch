import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ColoredButton({
  title,
  styleButton,
  styleText,
  onPress,
}) {
  return (
    <TouchableOpacity
      className={`py-3 rounded-md ${styleButton}`}
      onPress={onPress}>
      <Text className={`font-semibold text-center text-sm ${styleText}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
