import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function TextInputWithLabel({
  label,
  placeholder,
  isPassword,
  value,
  onChange,
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="flex flex-col my-2 gap-y-2">
      <Text className="text-sm font-bold">{label}</Text>
      <View className="flex flex-row items-center justify-center">
        <TextInput
          className="w-full px-3 py-1 rounded-md bg-gray"
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isPassword && !isVisible}
        />
        {isPassword && (
          <TouchableOpacity
            className="absolute right-4"
            onPress={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <Feather
                name="eye"
                size={15}
                color="#ba7e80"
              />
            ) : (
              <Feather
                name="eye-off"
                size={15}
                color="#ba7e80"
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
