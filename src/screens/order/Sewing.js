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
import sewing from "../../api/order/sewing.js";
import { useAuthContext } from "../../contexts/AuthContext";
import formatDate from "../../utils/formatDate.js";
import Loading from "../../components/Loading";
import FittingActivate from "../../../assets/fitting-icon.svg";

export default function DetailsOrder() {
  const navigation = useNavigation();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const auth = useAuthContext();
  const { order_id, state } = route.params;

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      fetchData(user_token);
    }
  };

  const fetchData = async (user_token) => {
    try {
      const result = await sewing(order_id, user_token);
      console.log(result);
      if (result.data.status === "success") {
        setDetail(result.data.data);
        setLoading(false);
      } else {
        console.error("Failed to fetch data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
    // fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <OrderTemplate name={detail.name}>
      <IconSewing state={state} />
      <TrackBarSewing>
        <IconWithTitleSewing title={"Measuring"}>
          <Ionicons
            name="checkmark-circle-outline"
            size={40}
            color="#ba7e80"
          />
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Sewing"}>
          {state == "SEWING" ? (
            <SewingSymbol />
          ) : (
            <Ionicons
              name="checkmark-circle-outline"
              size={40}
              color="#ba7e80"
            />
          )}
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Fitting"}>
          {state == "FITTING" ? <FittingActivate /> : <FittingSymbol />}
        </IconWithTitleSewing>
        <IconWithTitleSewing title={"Deliver"}>
          <BicycleSymbol />
        </IconWithTitleSewing>
      </TrackBarSewing>
      <View className="flex flex-row justify-between w-full px-3 mb-4">
        <Text className="font-medium">
          #{detail.id.split("-").slice(0, 4).join("-")}
        </Text>
        <ColoredBox status={state} />
      </View>
      <OrderDetailBox
        datetime={formatDate(detail.due_date)}
        address={detail.delivery_address}
        delivery={"Arrives in 1 hour"}
      />
      <View className="mb-20" />
    </OrderTemplate>
  );
}
