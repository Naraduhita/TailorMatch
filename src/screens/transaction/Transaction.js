import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import getPaymentMethods from "../../api/payment/get-methods";
import { useAuthContext } from "../../contexts/AuthContext";
import ColoredButton from "../../components/Button/ColoredButton";
import getOrderDetail from "../../api/orders/get-order-detail";

export default function Transaction({ navigation }) {
  const route = useRoute();
  const { order_id, total } = route.params;
  const auth = useAuthContext();
  const [methods, setMethods] = React.useState([]);
  const [methodId, setMethodId] = React.useState(0);
  const [order, setOrder] = React.useState({});

  const getMethods = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const methods = await getPaymentMethods(user_token);
      setMethods(methods.data.data);
    } else {
      navigation.navigate("login");
    }
  };

  const getOrderDetailData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const order = await getOrderDetail(user_token, order_id);
      setOrder(order.data.data);
    } else {
      navigation.navigate("login");
    }
  };

  const selectedMethod = (id) => {
    setMethodId(id);
  };

  React.useEffect(() => {
    getMethods();
    getOrderDetailData();
  }, []);

  console.log(order);

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col items-center justify-start w-full h-full px-4">
        <View className="w-full mb-5">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="flex-row items-center">
                <Ionicons
                  name="arrow-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <View className="flex-col items-center mx-auto">
              <Text className="text-lg font-semibold ">Payment</Text>
              <Text>Sweetest Stitch</Text>
            </View>
          </View>
        </View>

        <View className="flex-col items-center w-full">
          <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
            <Text className="mb-2 text-sm font-bold">
              {order.Users.username}
            </Text>
            <Text className="mb-2 text-sm">{order.delivery_address}</Text>
            <Text className="text-sm">{order.OrderItems.length} items</Text>
          </View>

          <View className="w-full p-4 mt-3 bg-white shadow-sm rounded-xl">
            <View className="flex-row items-center justify-between">
              <Text className="mb-2 text-sm font-bold">Your total bill is</Text>
              <Text className="mb-2 text-lg font-bold">Rp. {total}</Text>
            </View>
            <Text className="text-sm ">
              Please choose your preffered payment method
            </Text>
          </View>
        </View>

        <View className="flex-col w-full mt-5">
          <Text className="text-lg font-bold">Payment Method</Text>
          <View className="items-center w-full p-4 mt-2 bg-white shadow-sm rounded-xl">
            <FlatList
              data={methods}
              keyExtractor={(item) => item.id}
              className="w-full"
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => selectedMethod(item.id)}
                  className="w-full">
                  <View className="flex flex-row items-center justify-between w-full p-4 mt-3 border rounded-lg">
                    <Text className="text-sm font-bold">{item.name}</Text>
                    {methodId == item.id && (
                      <Ionicons
                        name="checkmark"
                        size={20}
                        color="black"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <ColoredButton
          title="Pay"
          onPress={() => navigation.navigate("failed")}
          styleButton="w-full mt-5 bg-old-rose rounded-lg"
          styleText="text-white"
        />
      </View>
    </SafeAreaView>
  );
}
