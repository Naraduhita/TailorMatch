import { View, Text, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddItem() {
  const navigation = useNavigation();

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <SafeAreaView>
        <View className="mx-8">
          <View className="justify-start items-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
            <TextInput
              placeholder="Name of Order"
              className="py-1"
            />
          </View>

          <View className=" w-full mt-4 flex flex-row ">
            <View className="flex-row-3 rounded-lg py-1 px-5 bg-white">
              <TextInput
                placeholder="*Enter quantity"
                keyboardType="numeric"
                className="text-center"
              />
            </View>
            <Text className="text-xs text-red px-2 pt-3">*numerical form</Text>
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
