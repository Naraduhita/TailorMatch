import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import LatarPage from "../components/LatarPage";

export default function HomeScreen({ navigation }) {
  return (
    <LatarPage>
      <Text
        className="text-maroon items-start ml-4"
        // onPress={() => alert('This is the "Home" screen.')}
      >
        Current Location
      </Text>
      <StatusBar style="auto" />
    </LatarPage>
  );
}
