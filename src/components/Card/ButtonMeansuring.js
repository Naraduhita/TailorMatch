import { View, Text, TextInput } from "react-native";
import React from "react";

const ButtomstInput = ({ label, placeholder, setValue }) => {
  return (
    <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
      <Text className="font-semibold">{label}</Text>
      <View className="flex flex-row">
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setValue(text)}
          className="text-center"
          keyboardType="numeric"
        />
        <Text className="pt-1 px-1">cm</Text>
      </View>
    </View>
  );
};

export default function ButtonMeansuring({
  setWaist2,
  setHips2,
  setInseam2,
  setLength2,
}) {
  return (
    <View className="justify-center mx-8 mt-4">
      <Text className="font-bold px-4 text-base">Bottoms</Text>
      <ButtomstInput
        label="Waist"
        placeholder="..."
        setValue={setWaist2}
      />
      <ButtomstInput
        label="Hips"
        placeholder="..."
        setValue={setHips2}
      />
      <ButtomstInput
        label="Inseam"
        placeholder="..."
        setValue={setInseam2}
      />
      <ButtomstInput
        label="Length"
        placeholder="..."
        setValue={setLength2}
      />
    </View>
  );
}
