import * as React from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../../components/Background";

export default function History({ navigation }) {
  return (
    <Background>
      <Image
        source={require("../../../assets/tabler_hanger-off.png")}
        style={{ width: 100, height: 100 }} // Adjust the width and height as needed
      />
      <Text
        className="text-black-500 font-bold text-lg"
        onPress={() => navigation.navigate("History")}
      >
        No tailor history yet
      </Text>
      <Text className="text-black-500">Embrace the blank canvas</Text>
      <Text className="text-black-500">
        and start your tailoring journey today!
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
