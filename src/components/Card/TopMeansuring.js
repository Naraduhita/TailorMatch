import { View, Text, TextInput } from "react-native";
import React from "react";

const MeasurementInput = ({ label, placeholder, setValue, value }) => {
  return (
    <View className="flex flex-row items-center justify-between w-full px-5 py-4 mt-3 bg-white rounded-2xl">
      <Text className="font-semibold">{label}</Text>
      <View className="flex flex-row">
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setValue(text)}
          value={value}
          className="text-center"
          keyboardType="numeric"
        />
        <Text className="px-1 pt-1">cm</Text>
      </View>
    </View>
  );
};

export default function TopMeansuring({
  setBust,
  bust,
  setWaist,
  waist,
  setHips,
  hips,
  setLength,
  length,
  setSleeveLength,
  sleeveLength,
}) {
  return (
    <View className="justify-center">
      <Text className="px-4 text-base font-bold">Top</Text>

      <MeasurementInput
        label="Bust"
        placeholder="..."
        setValue={setBust}
        value={bust}
      />
      <MeasurementInput
        label="Waist"
        placeholder="..."
        setValue={setWaist}
        value={waist}
      />
      <MeasurementInput
        label="Hips"
        placeholder="..."
        setValue={setHips}
        value={hips}
      />
      <MeasurementInput
        label="Length"
        placeholder="..."
        setValue={setLength}
        value={length}
      />
      <MeasurementInput
        label="Sleeve Length"
        placeholder="..."
        setValue={setSleeveLength}
        value={sleeveLength}
      />
    </View>
  );
}
