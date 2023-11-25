import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import ThreadsHome from "../../components/Home/ThreadsHome";
import { useNavigation } from "@react-navigation/native";
import IconDoodle from "../../components/Box/IconDoodle";
import ItemDoodle from "../../components/Box/ItemDoodle";
import { SafeAreaView } from "react-native-safe-area-context";
import ColoredButton from "../../components/Button/ColoredButton";

export default function Thread() {
  const navigation = useNavigation();

  return (
    <ThreadsHome>
      <SafeAreaView>
        <ItemDoodle />
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="pt-3">
          <ColoredButton
            title={"Chat With This Tailor"}
            styleButton={"bg-old-rose w-full"}
            styleText={"text-white"}
            onPress={() => navigation.navigate("Chat")}
          />
        </View>
      </View>
    </ThreadsHome>
  );
}
