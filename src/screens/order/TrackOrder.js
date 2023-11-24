import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColoredButton from "../../components/Button/ColoredButton";

export default function TrackOrder() {
  return (
    <SafeAreaView className="flex-1">
      <View className="relative flex flex-col">
        <View className="absolute z-10 w-full pb-4 rounded-b-xl pt-7 bg-concrete">
          <Text className="text-xl font-semibold text-center">Track Order</Text>
        </View>
        <MapView
          initialRegion={{
            latitude: -7.2814676,
            longitude: 112.7852824,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          className="w-full h-screen border-2 border-gray">
          <Marker
            coordinate={{
              latitude: -7.2814676,
              longitude: 112.7852824,
            }}
            title="Delivery Location"
            description="This is the delivery location"
            identifier="destination"
          />
        </MapView>
        <View className="absolute bottom-0 z-10 flex flex-col w-full">
          <View className="flex flex-row items-start p-5 h-52 rounded-t-xl bg-old-rose">
            <Feather
              name="user"
              size={30}
              color="white"
            />
            <Text className="mx-5 text-lg font-semibold text-white">
              Sweetest Stitch
            </Text>
          </View>
          <View className="absolute bottom-0 flex flex-col w-full p-5 rounded-t-xl bg-concrete">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-col items-start justify-start gap-y-1">
                <Text className="text-xs font-light text-emperor">
                  Delivery Address
                </Text>
                <View className="flex flex-row items-center gap-x-1">
                  <Ionicons
                    name="location"
                    size={15}
                    color="#ba7e80"
                  />
                  <Text className="font-semibold">Sutorejo Barat No. 36</Text>
                </View>
              </View>
              <View className="flex flex-col items-end justify-end gap-y-1">
                <Text className="text-xs font-light text-emperor">
                  Delivery Time
                </Text>
                <View className="flex flex-row items-center gap-x-1">
                  <Ionicons
                    name="location"
                    size={15}
                    color="#ba7e80"
                  />
                  <Text className="font-semibold">13 : 30 PM</Text>
                </View>
              </View>
            </View>
            <ColoredButton
              title={"See Details"}
              styleButton={"bg-old-rose w-2/3 self-center mt-5"}
              styleText={"text-white"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
