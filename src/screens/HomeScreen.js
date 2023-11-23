import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Background from "../components/Background";

export default function HomeScreen({ navigation }) {
  return (
    <View className="bg-[#F2E5E5]">
      <Text
        className="text-maroon items-start"
        // onPress={() => alert('This is the "Home" screen.')}
      >
        Current Location
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
