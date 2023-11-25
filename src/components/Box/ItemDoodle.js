import { View, Text, ScrollView } from "react-native";
import React from "react";
import IconDoodle from "../../components/Box/IconDoodle";
import EssentsialSVG from "../../../assets/essentials.svg";
import StapleSVG from "../../../assets/staplepieces.svg";
import EleganSVG from "../../../assets/elegance.svg";
import IndepentenSVG from "../../../assets/independentWomen.svg";
import CollorFullSVG from "../../../assets/colorfull.svg";

export default function ItemDoodle() {
  return (
    <ScrollView>
      <IconDoodle />
      <Text className="font-bold mt-5 px-4">Our Collection</Text>
      <View className="px-4 mb-4 mt-1">
        <View className="h-40 w-full bg-[#ffffff]">
          <View className="items-center pt-4">
            <EssentsialSVG />
          </View>
          <Text className="font-medium px-5 mt-2">The Essentials</Text>
        </View>

        <View className="h-40 w-full bg-[#ffffff]">
          <View className="items-center pt-4">
            <StapleSVG />
          </View>
          <Text className="font-medium px-5 mt-2">Staple Pieces</Text>
        </View>

        <View className="h-40 w-full bg-[#ffffff]">
          <View className="items-center pt-4">
            <EleganSVG />
          </View>
          <Text className="font-medium px-5 mt-2">Everyday Elegance</Text>
        </View>

        <View className="h-40 w-full bg-[#ffffff]">
          <View className="items-center pt-4">
            <IndepentenSVG />
          </View>
          <Text className="font-medium px-5 mt-2">Beautiful Blazzer</Text>
        </View>

        <View className="h-40 w-full bg-[#ffffff]">
          <View className="items-center pt-4">
            <CollorFullSVG />
          </View>
          <Text className="font-medium px-5 mt-2">Look Color Full</Text>
        </View>
      </View>
    </ScrollView>
  );
}
