import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import history from "../../api/order/history";
import { useAuthContext } from "../../contexts/AuthContext";
import useLocation from "../../hooks/Location";

export default function InOrder() {
  const navigation = useNavigation();
  const auth = useAuthContext();
  const [store, setStore] = React.useState([]);
  const [isUser, setIsUser] = React.useState(false);
  const { __getLocation, __locationPermissions, locationName, loading } =
    useLocation();

  const truncateName = (name, cutNumber) => {
    if (name.length > cutNumber) {
      return name.slice(0, cutNumber) + "...";
    }
    return name;
  };

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      fetchData(user_token);
    }
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  const fetchData = async (user_token) => {
    try {
      const result = await history(user_token); // Panggil fungsi history yang menggunakan Axios
      console.log("in order", result);
      if (result.data.status === "success") {
        const formattedData = result.data.data.map((item, index) => ({
          // Mengakses result.data.data
          name: item.delivery_address,
          key: String(index + 1),
          order_date: formatDate(item.order_date),
          // order_date: item.order_date,
          createdAt: formatDate(item.createdAt),
          due_date: formatDate(item.due_date),
          address: item.delivery_address,
          state: item.state,
          order_id: item.id,
          customer: item.Users.username,
          // state: item.state,
        }));

        setStore(formattedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const checkUser = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user = await auth.getUser();
      if (user.role == "USER") {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const reload = async () => {
    console.log("reload");
    getData();
    checkUser();
  };

  console.log("store in order", store);

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col h-full mx-5 gap-y-4">
        <View className="w-full">
          <View className="flex-row items-center justify-between">
            <View className="flex-col items-center mx-auto">
              <Text className="text-lg font-semibold ">In Order</Text>
              <Text>Sweetest Stitch</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("create-order-tailor")}
          className="absolute z-10 w-full bottom-3">
          <View className="items-center w-full p-4 bg-maroon rounded-xl">
            <Text className="font-bold text-white ">Create New Order</Text>
          </View>
        </TouchableOpacity>

        {/* isi card */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {store.length != 0 ? (
            store.map((item, index) => (
              <TouchableOpacity
                style={{ marginBottom: 20 }}
                key={index}
                className="flex-col items-center"
                onPress={() =>
                  navigation.navigate("order-num", { order_id: item.order_id })
                }>
                <View className="items-center p-4 bg-white shadow-sm rounded-xl w-80">
                  <View className="flex-row items-center justify-between w-80">
                    <Text className="mx-8 text-sm font-bold">
                      {item.customer}
                    </Text>
                    <View className="px-4 py-1 mr-6 rounded-full bg-yellow">
                      <Text className="text-sm font-bold text-white">
                        {item.state}
                      </Text>
                    </View>
                  </View>

                  <Text className="mt-2 text-sm text-grayText">
                    {item.address}
                  </Text>
                  <View className="flex items-center mt-3 border-b-2 border-b-gray w-80" />
                  <Text className="mt-2 ml-16 text-sm text-grayText w-80">
                    Send before {item.due_date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View className="w-full">
              <Text className="text-center">No Orders</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
