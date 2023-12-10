import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColoredButton from "../../components/Button/ColoredButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Loading from "../../components/Loading";
import { useAuthContext } from "../../contexts/AuthContext";
import sewing from "../../api/order/sewing.js";

export default function TrackOrder() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order_id } = route.params;
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
              {detail.Tailors.name}
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
                  <Text className="font-semibold">
                    {detail.delivery_address}
                  </Text>
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
