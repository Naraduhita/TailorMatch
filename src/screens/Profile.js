import * as React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({ navigation }) {
  return (
    <Background>
      <SafeAreaView className="container flex-1">
        <View className="flex-col items-center">
          <Image
            className="border-4 rounded-full w-36 h-36 border-pink"
            source={require("../components/img/meng.jpg")}
          />
          <Text className="mt-3 text-2xl font-bold">Adiba Zalfa Camila</Text>
          <Text className="text-sm font-normal">ID: 5027211048</Text>
        </View>

        <View className="flex-col items-center mt-4">
          <View className="justify-start py-2 bg-white  rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="person-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Account</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white  rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="globe-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Language</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white  rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="construct-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Preference</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white  rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="information-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Help & Center</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </Background>
  );
}
