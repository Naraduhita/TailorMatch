import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LatarPage from "../../components/LatarPage";
import { Ionicons, Feather, Icon } from "@expo/vector-icons";
import NotificationSymbol from "../../../assets/notification.svg";
import SearchBar from "../../components/Bar/SearchBar";
import FloatingButton from "../../components/Button/FloatingButton";
import useLocation from "../../hooks/Location";
import { useAuthContext } from "../../contexts/AuthContext";
import history from "../../api/order/history";
import { useNavigation } from "@react-navigation/native";

export default function HomeTailor() {
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
      console.log("hometailor", result);
      if (result.data.status === "success") {
        const formattedData = result.data.data.map((item, index) => ({
          // Mengakses result.data.data
          name: item.delivery_address,
          key: String(index + 1),
          order_date: formatDate(item.order_date.split("T")[0]),
          // order_date: item.order_date.split("T")[0],
          createdAt: formatDate(item.createdAt.split("T")[0]),
          state:
            item.state.charAt(0).toUpperCase() +
            item.state.slice(1).toLowerCase(),
          order_id: item.id,
          hastag: item.id.split("-")[0].toUpperCase(),
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

  console.log("store hometailor", store);
  // console.log("tailors");
  // console.log(tailors[0]);

  return (
    <LatarPage>
      <View className="mx-5 my-5">
        <View className="absolute z-10 top-[550px] right-5">
          <FloatingButton />
        </View>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="flex justify-start w-2/3 mt-1 flex-col-2"
            onPress={() => {
              __locationPermissions();
              __getLocation();
            }}>
            <Text className="text-xs text-maroon">Current Location</Text>
            <View className="flex flex-row items-center mt-1 gap-x-1">
              <Ionicons
                name="location"
                size={15}
                color="#ba7e80"
              />
              <Text className="w-full font-semibold">{locationName}</Text>
            </View>
          </TouchableOpacity>
          <NotificationSymbol />
          <TouchableOpacity onPress={() => reload()}>
            <Ionicons
              name="reload"
              size={23}
              color="#545454"
            />
          </TouchableOpacity>
        </View>

        <SearchBar />

        <ScrollView
          className="my-4 mb-20"
          showsVerticalScrollIndicator={false}>
          <Text className="mb-2 text-base font-bold">Order</Text>
          <View className="mb-4">
            {store.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("order-num", { order_id: item.order_id })
                }>
                <View
                  key={index}
                  className="flex flex-col"
                  style={{ marginBottom: 20 }}>
                  <View className="flex-col items-center">
                    <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
                      <View className="flex-row items-center justify-between">
                        <View className="flex-col items-start">
                          <Text className="font-bold text-md">
                            {item.customer} #{item.hastag}
                          </Text>
                          <Text className="mt-1 text-sm font-normal ">
                            {item.createdAt} - {item.order_date}
                          </Text>
                        </View>
                        <Ionicons
                          name="chevron-forward-outline"
                          size={25}
                          color="black"
                        />
                      </View>
                      <View className="mt-2 border-b-2 border-b-black"></View>
                      <View>
                        <Text className="mt-2 font-bold text-yellow text-md">
                          {item.state}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View className="mb-4">
            <View className="flex flex-col ">
              <Text className="mb-2 text-base font-bold">My Collection</Text>
            </View>
            <View className="flex-col items-center">
              <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="w-full mb-2 bg-red max-h-32">
                  <Image
                    className="w-full h-full"
                    source={require("../../components/img/catalog-tailor.png")}
                  />
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-semibold ">The Essential</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("edit-collection")}>
                    <Feather
                      className=""
                      name="edit-3"
                      size={20}
                      color="#BA7E80"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="flex-col items-center mt-2">
              <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="w-full mb-2 bg-red max-h-32">
                  <Image
                    className="w-full h-full"
                    source={require("../../components/img/catalog-tailor.png")}
                  />
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-semibold ">Staple Pieces</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("edit-collection")}>
                    <Feather
                      className=""
                      name="edit-3"
                      size={20}
                      color="#BA7E80"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LatarPage>
  );
}
