import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import getPaymentMethods from "../../api/payment/get-methods";
import { useAuthContext } from "../../contexts/AuthContext";
import ColoredButton from "../../components/Button/ColoredButton";
import getOrderDetail from "../../api/orders/get-order-detail";
import Loading from "../../components/Loading";
import updatePayment from "../../api/payment/update-payment";
import * as LocalAuthentication from "expo-local-authentication";

export default function Transaction({ navigation }) {
  const route = useRoute();
  const { order_id, total, payment_id } = route.params;
  const auth = useAuthContext();
  const [methods, setMethods] = React.useState([]);
  const [methodId, setMethodId] = React.useState(0);
  const [order, setOrder] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [compatible, setCompatible] = React.useState(false);
  const [isFingerprints, setIsFingerprints] = React.useState(false);

  const checkDeviceForHardware = async () => {
    let isCompatible = await LocalAuthentication.hasHardwareAsync();
    setCompatible(isCompatible);
  };

  const checkForFingerprints = async () => {
    let isFingerprints = await LocalAuthentication.isEnrolledAsync();
    setIsFingerprints(isFingerprints);
  };

  const scanFingerprint = async () => {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success === true) {
      handlePayment();
    }
  };

  const showAndroidAlert = () => {
    Alert.alert(
      "Fingerprint Scan",
      "Place your finger over the touch sensor and press scan.",
      [
        {
          text: "Scan",
          onPress: () => {
            scanFingerprint();
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
      ],
    );
  };

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
      setLoading(false);
    } else {
      navigation.navigate("login");
    }
  };

  const handlePayment = async () => {
    const isLoggedIn = await auth.CheckToken();
    const user = await auth.getUser();
    let isUser = false;

    if (user.role == "USER") {
      isUser = true;
    }

    if (methodId == 0) {
      return Alert.alert("Please choose a method payment");
    }

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const pay = await updatePayment(
        user_token,
        payment_id,
        methodId,
        order_id,
      );

      if (pay.data.status == "success") {
        navigation.navigate("success", {
          total,
          order_id,
          user_id: user.id,
          isUser,
          state: "MEASURING",
        });
      } else {
        navigation.navigate("failed");
      }
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
    checkDeviceForHardware();
    checkForFingerprints();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
                    {methodId == parseInt(item.id) && (
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
          onPress={
            Platform.OS === "android" ? showAndroidAlert : scanFingerprint
          }
          styleButton="w-full mt-5 bg-old-rose rounded-lg"
          styleText="text-white"
        />
      </View>
    </SafeAreaView>
  );
}
