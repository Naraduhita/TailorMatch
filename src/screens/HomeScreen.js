import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <Text
        className="text-[#000] italic"
        onPress={() => alert('This is the "Home" screen.')}>
        Home Screen
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
