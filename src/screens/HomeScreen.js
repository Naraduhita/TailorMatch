import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LatarPage from "../components/LatarPage";
import NotificationSymbol from "../../assets/notification.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "../components/Bar/SearchBar";
import { useAuthContext } from "../contexts/AuthContext";

export default function HomeScreen() {
  const navigation = useNavigation();
  const auth = useAuthContext();

  return (
    <LatarPage>
      <SafeAreaView className="px-8 mb-7">
        <View className="flex-row items-center justify-between w-full mt-4">
          <View className="flex justify-start mt-1 flex-col-2">
            <Text className="text-xs text-maroon">Current Location</Text>

            <View className="flex flex-row items-center mt-1 gap-x-1">
              <Ionicons
                name="location"
                size={15}
                color="#ba7e80"
              />
              <Text className="font-semibold">Sutorejo Barat No. 36</Text>
            </View>
          </View>
          <NotificationSymbol />
        </View>

        <View>
          <SearchBar />
        </View>
      </SafeAreaView>

      <ScrollView>
        <View className="px-10 mb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="mb-2 text-base font-bold">Top Choises</Text>
            <Text className="text-xs font-medium text-maroon">See More</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("doodle-thread")}>
              <View className="w-40 h-40 mr-2 bg-white rounded-2xl">
                <Text className="px-2 font-bold mt-28 ">Doodled Threads</Text>
                <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
              </View>
            </TouchableOpacity>

            {["Sweetest Stitch", 3, 4, 5, 6].map((tile) => (
              <View
                key={tile}
                className="w-40 h-40 mr-2 bg-white rounded-2xl">
                <Text className="px-2 font-bold mt-28 ">{tile}</Text>
                <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="px-10 mb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="mb-2 text-base font-bold">Tailor Nearby</Text>
            <Text className="text-xs font-medium text-maroon">See More</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {["Petite Posies", "Playful Pattern", "Lovely Shirt", 4, 5, 6].map(
              (nearby, index) => (
                <View
                  key={nearby}
                  className="w-40 h-40 mr-2 bg-white rounded-2xl">
                  <View className="flex-row items-center justify-between px-2 mt-28">
                    <Text className="font-bold">{nearby}</Text>
                    <Text className="text-xs font-light text-old-rose">
                      {["200m", "300m", "400m", 4, 5, 6][index]}
                    </Text>
                  </View>
                  <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                </View>
              ),
            )}
          </ScrollView>
        </View>

        <View className="px-10 mb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="mb-2 text-base font-bold">Inspiration</Text>
            <Text className="text-xs font-medium text-maroon">See More</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {["Jakarta Fashion Week", "ESMOD Graduation", 3, 4, 5, 6].map(
              (nearby) => (
                <View
                  key={nearby}
                  className="w-40 h-40 mr-2 bg-white rounded-2xl">
                  <Text className="px-2 font-bold mt-28 ">{nearby}</Text>
                  <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                </View>
              ),
            )}
          </ScrollView>
        </View>

        <View className="px-10 mb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="mb-2 text-base font-bold">Favorite</Text>
            <Text className="text-xs font-medium text-maroon">See More</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {["Easy Breezy Apparel", "Snuggly Chic", 3, 4, 5, 6].map(
              (nearby) => (
                <View
                  key={nearby}
                  className="w-40 h-40 mr-2 bg-white rounded-2xl">
                  <Text className="px-2 font-bold mt-28 ">{nearby}</Text>
                  <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                </View>
              ),
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </LatarPage>
  );
}
