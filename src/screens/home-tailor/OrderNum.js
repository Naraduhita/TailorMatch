import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, Feather, Icon } from "@expo/vector-icons";
import sewing from "../../api/order/sewing.js";
import { useAuthContext } from "../../contexts/AuthContext";

export default function OrderNum({ navigation }) {
  const data = [
    {
      status: "Onging",
      id: 1,
    },
    {
      status: "Cancelled",
      id: 2,
    },
    {
      status: "Done",
      id: 3,
    },
  ];

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isDropdown, setDropdown] = useState(false);
  const [status, setStatus] = useState("Ongoing");

  // const navigation = useNavigation();
  const [detail, setDetail] = useState([]);
  const route = useRoute();
  const auth = useAuthContext();
  const { order_id } = route.params;

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  useEffect(() => {
    const getData = async () => {
      const isLoggedIn = await auth.CheckToken();

      if (isLoggedIn) {
        const user_token = await auth.getToken();
        fetchData(user_token);
      }
    };

    const fetchData = async (user_token) => {
      try {
        const result = await sewing(order_id, user_token); // Panggil fungsi history yang menggunakan Axios
        console.log("order", result);
        if (result.data.status === "success") {
          const formattedData = {
            name: result.data.data.delivery_address,
            date: result.data.data.order_date.split("T")[0],
            key: "1",
            state:
              result.data.data.state.charAt(0).toUpperCase() +
              result.data.data.state.slice(1).toLowerCase(),
            customer: result.data.data.Users.username,
            address: result.data.data.Users.address,
            due_date: formatDate(result.data.data.due_date.split("T")[0]),
            hastag: result.data.data.id.split("-")[0].toUpperCase(),
            detail: result.data.data.OrderItems,
          };
          setDetail(formattedData);
        } else {
          console.error("Failed to fetch data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
    // fetchData();
  }, []);
  console.log("detail");
  console.log(detail);

  if (
    detail &&
    detail.detail &&
    detail.detail.length > 0 &&
    detail.detail[0].Clothes
  ) {
    console.log(detail.detail[0].Clothes.name);
  } else {
    console.log(
      "Nilai detail atau Clothes tidak tersedia atau belum diinisialisasi",
    );
  }

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col h-full mx-5 gap-y-4">
        <View className="w-full pt-2">
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
              <Text className="text-lg font-semibold ">Order Number</Text>
              <Text>{detail.hastag}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("order-num")}
          className="absolute z-10 w-full bottom-3">
          <View className="items-center w-full p-4 mx-auto bg-maroon rounded-xl">
            <Text className="font-bold text-white ">Update</Text>
          </View>
        </TouchableOpacity>

        {/* isi card */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mb-5">
          <View className="flex-col items-center">
            <View className="items-center p-4 bg-white shadow-sm rounded-xl w-80">
              <View className="flex-row items-center justify-between w-80 ">
                <Text className="mx-8 text-sm font-bold ">
                  {detail.customer}
                </Text>
              </View>

              <Text className="mt-2 text-sm text-grayText">
                {detail.address}
              </Text>
              <View className="flex items-center mt-3 border-b-2 border-b-gray w-80" />
              <Text className="mt-2 ml-16 text-sm text-grayText w-80">
                Send before {detail.due_date}
              </Text>
            </View>
          </View>

          {detail && detail.detail && detail.detail.length > 0 ? (
            detail.detail.map((item, index) => (
              <View
                key={index}
                className="flex-col items-center mt-2">
                <View className="flex-col p-6 bg-white shadow-sm rounded-xl w-80">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-col ">
                      <Text className="text-sm font-semibold ">
                        {item.Clothes.quantity} {item.Clothes.name}
                      </Text>
                      <Text className="mt-1 text-xs font-normal ">
                        Rp{item.Clothes.price}
                      </Text>
                    </View>
                    <View className="flex-row gap-x-2">
                      <Text className="text-sm underline text-maroon underline-offset-8">
                        Edit
                      </Text>
                      <Feather
                        className=""
                        name="edit-3"
                        size={20}
                        color="#BA7E80"
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Loading</Text>
          )}

          {/* status */}
          <View className="flex flex-row items-center justify-between mx-auto mt-3 w-80">
            <Text className="font-semibold">Status :</Text>
            <View className="flex flex-row items-center justify-between h-8 bg-white rounded-lg w-28">
              <Text className="ml-2 font-semibold">{detail.state}</Text>
              <TouchableOpacity
                className="mx-2"
                onPress={() => {
                  setDropdown((prevVal) => !prevVal);
                }}>
                <Feather
                  name="chevron-down"
                  size={15}
                  color="#ba7e80"
                />
              </TouchableOpacity>
              {isDropdown && (
                <FlatList
                  className="absolute left-0 w-full p-2 bg-white rounded-md top-10"
                  data={data}
                  nestedScrollEnabled
                  keyExtractor={(data) => data.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setStatus(item.status);
                        setDropdown(false);
                      }}>
                      <Text>{item.status}</Text>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => <View className="h-2" />}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
