import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import BicycleSVG from "../../../assets/bicycle.svg";
import ColoredButton from "../../components/Button/ColoredButton";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconWithTitle from "../../components/Box/IconWithTitle";
import TrackBar from "../../components/Bar/TrackBar";
import ColoredBox from "../../components/Box/ColoredBox";
import OrderDetailBox from "../../components/Box/OrderDetailBox";
import OrderTemplate from "../../components/Order/OrderTemplate";
import Loading from "../../components/Loading";
import { useAuthContext } from "../../contexts/AuthContext";
import sewing from "../../api/order/sewing.js";
import formatDate from "../../utils/formatDate.js";

export default function Deliver() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order_id, state } = route.params;
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const auth = useAuthContext();

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
  }, []);

  if (loading) {
    return <Loading />;
  }

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
        <Text className="font-medium">
          #{order_id.split("-").slice(0, 4).join("-")}
        </Text>
        <ColoredBox status={state} />
      </View>
      <OrderDetailBox
        datetime={formatDate(detail.order_date)}
        address={detail.delivery_address}
        delivery={formatDate(detail.due_date)}
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
        onPress={() => navigation.navigate("track-order", { order_id })}
      />
    </OrderTemplate>
  );
}
