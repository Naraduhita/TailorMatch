import * as React from "react";
import { View } from "react-native";
import ThreadsHome from "../../components/Home/ThreadsHome";
import { useNavigation, useRoute } from "@react-navigation/native";
import ItemDoodle from "../../components/Box/ItemDoodle";
import { SafeAreaView } from "react-native-safe-area-context";
import ColoredButton from "../../components/Button/ColoredButton";

export default function Thread() {
  const navigation = useNavigation();
  const route = useRoute();
  let tailor = route.params.tailor;

  return (
    <ThreadsHome tailor={tailor}>
      <SafeAreaView className="mt-5">
        <ItemDoodle
          tailor={tailor}
          longitude={Number.parseFloat(tailor.longitude)}
          latitude={Number.parseFloat(tailor.latitude)}
        />
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="pt-3">
          <ColoredButton
            title={"Chat With This Tailor"}
            styleButton={"bg-old-rose w-full"}
            styleText={"text-white"}
            onPress={() =>
              navigation.navigate("detail-chat", {
                username: tailor.name,
              })
            }
          />
        </View>
      </View>
    </ThreadsHome>
  );
}
