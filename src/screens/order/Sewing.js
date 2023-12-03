import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import OrderTemplate from "../../components/Order/OrderTemplate";
import IconWithTitleSewing from "../../components/Box/IconWithTitleSewing";
import TrackBarSewing from "../../components/Bar/TrackBarSewing";
import ColoredBox from "../../components/Box/ColoredBox";
import OrderDetailBox from "../../components/Box/OrderDetailBox";
import IconSewing from "../../components/Box/IconSewing";
import BicycleSymbol from "../../../assets/bicycleDark.svg";
import SewingSymbol from "../../../assets/sewing machine.svg";
import FittingSymbol from "../../../assets/fitting.svg";

export default function DetailsOrder() {
  const navigation = useNavigation();

  const [detail, setdetail] = useState([
    {
      name: "Sweetest Stitch",
      date: "12 November 2023",
      key: "1",
      address: "Sutorejo Barat No.36, Dukuh Suterejo, Mulyosari, Surabaya",
      estimated: "Finish in 1 week",
      status: "Ongoing",
    },
  ]);

  return (
    <OrderTemplate>
      <IconSewing />
      <TrackBarSewing>
        <IconWithTitleSewing title={"Measuring"}>
          <Ionicons
            name="checkmark-circle-outline"
            size={40}
            color="#ba7e80"
          />
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Sewing"}>
          <SewingSymbol />
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Fitting"}>
          <FittingSymbol />
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Deliver"}>
          <BicycleSymbol />
        </IconWithTitleSewing>
      </TrackBarSewing>
      <View className="mb-24 mr-2">
        <View className="flex flex-row justify-between w-full mb-4">
          <Text className="font-medium">#9632163716</Text>
          <ColoredBox status={"Ongoing"} />
        </View>
        <OrderDetailBox
          datetime={"12 November 2023 / 08:00"}
          address={"Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya"}
          delivery={"Arrives in 1 hour"}
        />
      </View>
    </OrderTemplate>
  );
}
