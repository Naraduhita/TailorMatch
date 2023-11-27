import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import LatarPage from "../components/LatarPage";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <LatarPage>
      <View className="bottom-0 absolute mb-8 ml-80">
        <TouchableOpacity onPress={() => navigation.navigate("in-order")}>
          <View className="bg-maroon rounded-full w-16 h-16 items-center justify-center">
            <Feather
              className=""
              name="plus"
              size={50}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LatarPage>
  );
}
