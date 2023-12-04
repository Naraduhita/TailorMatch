import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import sewing from "../../api/auth/sewing.js";

export default function DetailsOrder() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order_id } = route.params;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sewing(order_id);

        if (result.data.status === "success") {
          const formattedData = {
            name: result.data.data.delivery_address,
            date: result.data.data.order_date.split("T")[0],
            key: "1",
            status:
              result.data.data.status.charAt(0).toUpperCase() +
              result.data.data.status.slice(1).toLowerCase(),
          };
          setDetail(formattedData);
        } else {
          console.error("Failed to fetch data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(detail);

  return (
    <OrderTemplate name={detail.name}>
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
      <View className="flex flex-row justify-between w-full px-3 mb-4">
        <Text className="font-medium">#9632163716</Text>
        <ColoredBox status={detail.status} />
      </View>
      <OrderDetailBox
        datetime={detail.date}
        address={detail.name}
        delivery={"Arrives in 1 hour"}
      />
      <View className="mb-20" />
    </OrderTemplate>
  );
}
