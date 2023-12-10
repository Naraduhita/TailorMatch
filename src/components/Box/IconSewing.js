import { View, Text, Image } from "react-native";
import React from "react";
import SewingIcon from "../../../assets/sewing-icon.svg";
import FittingIcon from "../../../assets/fitting-icon.svg";

export default function IconSewing({ state }) {
  console.log(state);
  return (
    <View className="flex flex-col items-center justify-center w-full mb-5">
      {state == "SEWING" && <SewingIcon />}
      {state == "FITTING" && <FittingIcon />}
      <Text className="w-3/4 mt-5 text-sm font-light text-center">
        Your clothes are still being tailored, but we expect them to be finished
        soon.
      </Text>
    </View>
  );
}
