import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background-trans";
import { Ionicons, Feather, Icon } from "@expo/vector-icons";

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

  return (
    <SafeAreaView className="flex-1 container">
      <View className="w-full top-0 absolute h-20">
        <View className="flex-row items-center justify-between px-8  mt-10 ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>

          <View className="mx-auto flex-col items-center">
            <Text className="text-lg font-semibold ">Order Number</Text>
            <Text>231130EUXM715S</Text>
          </View>
        </View>
      </View>

      {/* isi card */}
      <ScrollView>
        <View className="flex-col items-center mt-24">
          <View className="bg-white p-4 shadow-sm rounded-xl w-80 items-center">
            <View className="flex-row justify-between items-center w-80 ">
              <Text className=" text-sm font-bold mx-8">
                Adiba Zalfa Camilla
              </Text>
            </View>

            <Text className="mt-2 text-sm text-grayText">
              Sutorejo Barat No. 36, Dukuh Sutorejo, Mulyosari, Surabaya
            </Text>
            <View className="mt-3 flex items-center border-b-2 border-b-gray w-80" />
            <Text className="mt-2 text-sm text-grayText w-80 ml-16">
              Send before November 30, 2023
            </Text>
          </View>
        </View>

        <View className="flex-col items-center mt-2">
          <View className="flex-col  bg-white p-6 shadow-sm rounded-xl w-80">
            <View className="flex-row items-center justify-between">
              <View className="flex-col ">
                <Text className=" text-sm font-semibold">(1) Party Dress</Text>
                <Text className=" text-xs mt-1 font-normal">Rp. 500.000</Text>
              </View>
              <View className="flex-row gap-x-2">
                <Text className="text-maroon underline underline-offset-8 text-sm">
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

        <View className="flex-col items-center mt-2">
          <View className="flex-col  bg-white p-6 shadow-sm rounded-xl w-80">
            <View className="flex-row items-center justify-between">
              <View className="flex-col ">
                <Text className=" text-sm font-semibold">
                  (1) Daily Wear Set
                </Text>
                <Text className=" text-xs mt-1 font-normal">Rp. 200.000</Text>
              </View>
              <View className="flex-row gap-x-2">
                <Text className="text-maroon underline underline-offset-8 text-sm">
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

        <View className="flex-col items-center mt-2">
          <View className="flex-col  bg-white p-6 shadow-sm rounded-xl w-80">
            <View className="flex-row items-center justify-between">
              <View className="flex-col ">
                <Text className=" text-sm font-semibold">(1) Pajamas Set</Text>
                <Text className=" text-xs mt-1 font-normal">Rp. 200.000</Text>
              </View>
              <View className="flex-row gap-x-2">
                <Text className="text-maroon underline underline-offset-8 text-sm">
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

        {/* status */}
        <View className=" w-80 mt-3 flex flex-row justify-between items-center mx-auto">
          <Text className="font-semibold">Status :</Text>
          <View className="bg-white w-28 h-8 rounded-lg flex flex-row justify-between items-center">
            <Text className="font-semibold ml-2">{status}</Text>
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
                className="absolute top-10 left-0 bg-white w-full rounded-md p-2"
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

        <TouchableOpacity onPress={() => navigation.navigate("order-num")}>
          <View className="p-4 bg-maroon w-80 rounded-xl items-center mx-auto mb-2 mt-28">
            <Text className="font-bold text-white ">Update</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
