import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import BicycleSVG from "../../../assets/bicycle.svg";
import ColoredButton from "../../components/Button/ColoredButton";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import IconWithTitle from "../../components/Box/IconWithTitle";
import TrackBar from "../../components/Bar/TrackBar";
import ColoredBox from "../../components/Box/ColoredBox";
import OrderDetailBox from "../../components/Box/OrderDetailBox";

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
        <TrackBar>
          <IconWithTitle title={"Measuring"}>
            <Ionicons
              name="checkmark-circle-outline"
              size={40}
              color="#ba7e80"
            />
          </IconWithTitle>
          <IconWithTitle title={"Sewing"}>
            <Ionicons
              name="checkmark-circle-outline"
              size={40}
              color="#ba7e80"
            />
          </IconWithTitle>
          <IconWithTitle title={"Fitting"}>
            <Ionicons
              name="checkmark-circle-outline"
              size={40}
              color="#ba7e80"
            />
          </IconWithTitle>
          <IconWithTitle title={"Fitting"}>
            <BicycleSVG />
          </IconWithTitle>
        </TrackBar>
        <View className="flex flex-row justify-between w-full">
          <Text className="font-medium">#9632163716</Text>
          <ColoredBox status={"Ongoing"} />
        </View>
        <OrderDetailBox
          datetime={"12 November 2023 / 08:00"}
          address={"Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya"}
          delivery={"Arrives in 1 hour"}
        />

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
