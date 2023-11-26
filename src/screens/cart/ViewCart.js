import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ItemCart from "../../components/Card/ItemCart";

export default function ViewCart() {
  const navigation = useNavigation();
  const [cartItemCount, setCartItemCount] = useState(1);

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <ScrollView>
        <SafeAreaView>
          <View className="mx-8">
            <ItemCart
              navigation={navigation}
              count={cartItemCount}
            />
            <ColoredButton
              title={"Add"}
              styleButton={"bg-old-rose w-full my-4 py-5 mt-12 rounded-2xl"}
              styleText={"text-white"}
              onPress={() => navigation.navigate("add-item")}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </MeansuringTemplate>
  );
}
