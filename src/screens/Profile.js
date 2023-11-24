import * as React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <Background>
      <SafeAreaView className="container flex-1">
        <View className="items-center flex-col">
          <Image
            className="w-36 h-36 rounded-full border-4  border-pink"
            source={require("../components/img/meng.jpg")}
          />
          <Text className="font-bold text-2xl mt-3">Adiba Zalfa Camila</Text>
          <Text className="font-normal text-sm">ID: 5027211048</Text>
        </View>

        <View className="items-center flex-col mt-4">
          <View className=" justify-start bg-white  rounded-2xl w-72 py-2">
            <View className="items-center flex-row mx-6">
              <Ionicons
                name="person-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="font-semibold text-xl mx-2">Account</Text>
            </View>
          </View>

          <View className=" justify-start bg-white  rounded-2xl w-72 py-2 mt-4">
            <View className="items-center flex-row mx-6">
              <Ionicons
                name="globe-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="font-semibold text-xl mx-2">Language</Text>
            </View>
          </View>

          <View className=" justify-start bg-white  rounded-2xl w-72 py-2 mt-4">
            <View className="items-center flex-row mx-6">
              <Ionicons
                name="construct-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="font-semibold text-xl mx-2">Preference</Text>
            </View>
          </View>

          <View className=" justify-start bg-white  rounded-2xl w-72 py-2 mt-4">
            <View className="items-center flex-row mx-6">
              <Ionicons
                name="information-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="font-semibold text-xl mx-2">Help & Center</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </Background>
  );
}
