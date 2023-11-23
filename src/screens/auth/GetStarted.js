import { View, Text } from "react-native";
import React from "react";
import EllipseSVG from "../../../assets/started.svg";
import ClothLogoSVG from "../../../assets/cloth-logo.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import ColoredButtom from "../../components/Button/ColoredButton.js";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 w-full">
      <View className="absolute">
        <EllipseSVG />
      </View>
      <View className="flex-col items-start justify-around flex-1 my-3 mx-7 gap-y-2">
        <View className="flex flex-col w-full gap-y-5">
          <View className="flex flex-row items-end justify-end">
            <ClothLogoSVG />
          </View>
          <Text className="text-3xl font-bold text-white">
            Discover the perfect fit with out premium tailoring services!
          </Text>
          <Text className="w-5/6 text-base font-light text-white">
            Craft your perfect fit with our expert tailors. Discover a seamless
            tailoring experience that transforms your wardrobe into a collection
            of impeccably crafted pieces.
          </Text>
        </View>
        <View className="flex flex-col w-full">
          <ColoredButtom
            title={"Start as Customer"}
            styleButton={"bg-white my-2"}
            styleText={"text-old-rose"}
            onPress={() => navigation.navigate("register")}
          />
          <ColoredButtom
            title={"Start as Tailor"}
            styleButton={"bg-white my-2"}
            styleText={"text-old-rose"}
            onPress={() => navigation.navigate("register")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
