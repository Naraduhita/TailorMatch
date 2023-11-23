import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import BicycleSVG from "../../../assets/bicycle.svg";
import ColoredButton from "../../components/Button/ColoredButton";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

export default function Deliver() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col items-start justify-around flex-1 mx-5 gap-y-4">
        <View className="flex flex-row items-center justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute z-10">
            <Feather
              name="arrow-left"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <View className="flex flex-col items-center justify-center w-full gap-y-1">
            <Text className="w-full text-lg font-normal text-center">
              Details Order
            </Text>
            <Text className="w-full font-light text-center">
              Sweetest Stitch
            </Text>
          </View>
        </View>
        <View className="relative flex flex-row justify-around w-full">
          <View className="absolute w-5/6 mx-auto border-b-2 border-dotted left-8 top-5 border-old-rose"></View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-concrete">
              <Ionicons
                name="checkmark-circle-outline"
                size={40}
                color="#ba7e80"
              />
            </View>
            <Text className="font-light">Measuring</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-concrete">
              <Ionicons
                name="checkmark-circle-outline"
                size={40}
                color="#ba7e80"
              />
            </View>
            <Text className="font-light">Sewing</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-concrete">
              <Ionicons
                name="checkmark-circle-outline"
                size={40}
                color="#ba7e80"
              />
            </View>
            <Text className="font-light">Fitting</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-concrete">
              <BicycleSVG />
            </View>
            <Text className="font-light">Deliver</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between w-full">
          <Text>#9632163716</Text>
          <Text>Ongoing</Text>
        </View>
        <View className="flex flex-col gap-y-2">
          <View className="flex flex-row gap-x-2">
            <Text className="w-1/3 font-light text-emperor">Tailored in</Text>
            <Text>12 November 2023 / 08:00</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="w-1/3 font-light text-emperor">
              Delivery Address
            </Text>
            <Text className="w-2/3">
              Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
            </Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="w-1/3 font-light text-emperor">
              Estimated Time
            </Text>
            <Text className="">Arrives in 1 hour</Text>
          </View>
        </View>

        <MapView
          initialRegion={{
            latitude: -7.2814676,
            longitude: 112.7852824,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          className="w-full border-2 border-gray"
          style={[{ height: 300 }]}>
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

        <ColoredButton
          title={"Track Order"}
          styleButton={"bg-old-rose w-full my-4"}
          styleText={"text-white"}
        />
      </View>
    </SafeAreaView>
  );
}
