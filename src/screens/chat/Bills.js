import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useAuthContext } from "../../contexts/AuthContext";
import clothByOrderId from "../../api/orders/clothByOrderId";
import createPayment from "../../api/payment/create-payment";

export default function Bills({ navigation }) {
  const auth = useAuthContext();
  const route = useRoute();
  const { order_id } = route.params;
  const [clothes, setClothes] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const clothes = await clothByOrderId(user_token, order_id);
      setClothes(clothes.data.data);
      calculateTotal();
    } else {
      navigation.navigate("login");
    }
  };

  const calculatePrice = (amount, price) => {
    return amount * price;
  };

  const calculateTotal = () => {
    let total = 0;
    clothes.map((cloth) => {
      total += calculatePrice(cloth.Clothes.quantity, cloth.Clothes.price);
    });
    setTotal(total);
  };

  const handlePayment = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const payment = await createPayment(user_token, order_id);
      console.log(payment);
      if (payment.data.status === "success") {
        navigation.navigate("transaction", {
          order_id,
          total,
        });
      }
    } else {
      navigation.navigate("login");
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    calculateTotal();
  }, [clothes]);

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col items-center justify-between w-full h-full px-3">
        <View className="flex flex-col w-full my-7 gap-y-5">
          <View className="flex-row items-center justify-center px-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="flex-row items-center">
                <Ionicons
                  name="arrow-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <View className="flex-col items-center w-full">
              <Text className="text-lg font-semibold ">Bills</Text>
              <Text>Sweetest Stitch</Text>
            </View>
          </View>

          <View className="flex-col items-center">
            {clothes &&
              clothes.map((cloth) => (
                <View
                  className="flex-row justify-between p-6 bg-white shadow-sm rounded-xl w-80"
                  key={cloth.id}>
                  <Text className="text-sm font-semibold ">
                    ({cloth.Clothes.quantity}) {cloth.Clothes.name}
                  </Text>
                  <Text className="text-sm font-semibold ">
                    Rp. {cloth.Clothes.price}
                  </Text>
                </View>
              ))}
          </View>
        </View>

        <View className="flex-col items-center w-full mb-5">
          <View className="flex-row justify-between w-full p-6 mb-3 bg-white shadow-sm rounded-xl">
            <Text className="text-sm font-semibold ">Total</Text>
            <Text className="text-sm font-semibold ">Rp. {total}</Text>
          </View>
          <TouchableOpacity
            onPress={handlePayment}
            className="w-full">
            <View className="flex w-full p-6 shadow-sm bg-pink rounded-xl">
              <Text className="text-sm font-bold text-center text-white">
                Agree
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-full mt-2">
            <Text className="text-xs text-center font-sm">
              By clicking the "Agree" button, you are entering into a binding
              agreement with Tailor Match purchase the products or services you
              have selected.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
