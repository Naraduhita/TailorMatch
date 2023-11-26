import { View, Text, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptySVG from "../../../assets/empty.svg";
import Empty2SVG from "../../../assets/empty-2.svg";

export default function EmpetyCart() {
  const navigation = useNavigation();

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <SafeAreaView>
        <View className="mx-8">
          <View className="items-center justify-center pt-40">
            <EmptySVG />
            <Empty2SVG />
          </View>
          <ColoredButton
            title={"Add New Items"}
            styleButton={"bg-old-rose w-full my-4 py-5 mt-56 rounded-2xl"}
            styleText={"text-white"}
            onPress={() => navigation.navigate("add-item")}
          />
        </View>
      </SafeAreaView>
    </MeansuringTemplate>
  );
}
