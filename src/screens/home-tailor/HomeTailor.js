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

export default function HomeTailor({ navigation }) {
  const { __getLocation, __locationPermissions, locationName, loading } =
    useLocation();
  const auth = useAuthContext();

  const checkUser = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user = await auth.getUser();
      console.log("userrrrrrrrrrrrrrr", user.role);
      if (user.role == "USER") {
        setIsUser(true);
      } else {
        setIsUser(false);
        getData();
      }
    } else {
      navigation.navigate("Login");
    }
  };

  React.useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    console.log("reload");
    checkUser();
  };

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
          <View className="mb-4">
            <View className="flex flex-col ">
              <Text className="mb-2 text-base font-bold">Order</Text>
            </View>
            <View className="flex-col items-center">
              <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row items-center justify-between">
                  <View className="flex-col items-start">
                    <Text className="font-bold text-md">
                      Caroline #9632163716
                    </Text>
                    <Text className="mt-1 text-sm font-normal ">
                      20 Agustus 2023 - 20 September 2023
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
                    ONGOING
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-col items-center mt-2">
              <View className="flex-col w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row items-center justify-between">
                  <View className="flex-col items-start">
                    <Text className="font-bold text-md">Adiba #4829371056</Text>
                    <Text className="mt-1 text-sm font-normal ">
                      20 Agustus 2023 - 20 September 2023
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
                    ONGOING
                  </Text>
                </View>
              </View>
            </View>
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
