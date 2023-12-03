import { View, Text, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TagDolarSVG from "../../../assets/tagdolar.svg";

export default function AddItem() {
  const navigation = useNavigation();

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <SafeAreaView>
        <View className="mx-8">
          <View className="justify-start items-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
            <View className="flex flex-row">
              <Text>Name of Order</Text>
              <Text className="text-[#FF0000] mx-1">*</Text>
            </View>
            <TextInput
              placeholder="Input Name of Order"
              className="py-1"
            />
          </View>

          <View className=" w-full mt-4 flex flex-row ">
            <View className="flex-row-3 rounded-lg py-1 px-5 bg-white">
              <View className="flex flex-row">
                <Text>Number of Order</Text>
                <Text className="text-[#FF0000] mx-1">*</Text>
              </View>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                className="text-left"
              />
            </View>
            <Text className="text-[10px] text-[#FF0000] px-2 pt-3">
              *In numerical form
            </Text>
          </View>

          <View className="justify-between flex flex-row items-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
            <View className="flex flex-row">
              <TagDolarSVG />
              <Text className="px-1">Price</Text>
              <Text className="text-[#FF0000] mx-1">*</Text>
            </View>
            <TextInput
              placeholder="Rp"
              keyboardType="numeric"
            />
          </View>

          <ColoredButton
            title={"Add"}
            styleButton={"bg-old-rose w-full my-4 py-5 mt-28 rounded-2xl"}
            styleText={"text-white"}
            onPress={() => navigation.navigate("view-cart")}
          />
        </View>
      </SafeAreaView>
    </MeansuringTemplate>
  );
}
