import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import BicycleSVG from "../../../assets/bicycle.svg";
import ColoredButton from "../../components/Button/ColoredButton";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import IconWithTitle from "../../components/Box/IconWithTitle";
import TrackBar from "../../components/Bar/TrackBar";
import ColoredBox from "../../components/Box/ColoredBox";
import OrderDetailBox from "../../components/Box/OrderDetailBox";
import OrderTemplate from "../../components/Order/OrderTemplate";

export default function Deliver() {
  const navigation = useNavigation();

  return (
    <OrderTemplate>
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
        onPress={() => navigation.navigate("track-order")}
      />
    </OrderTemplate>
  );
}
