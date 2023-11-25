import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import LatarPage from "../components/LatarPage";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Chat({ navigation }) {
  return (
    <LatarPage>
      <Text
        className="font-semibold"
        // onPress={() => navigation.navigate("Chat")}
      >
        hai
      </Text>
    </LatarPage>
  );
}
