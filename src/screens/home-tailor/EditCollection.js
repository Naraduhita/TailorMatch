import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, Icon } from "@expo/vector-icons";

export default function EditCollection({ navigation }) {
  const [collectionName, setCollectionName] = useState("");
  return (
    <View>
      <SafeAreaView className="container flex-1">
        <View className="w-full h-20">
          <View className="flex-row items-center px-8 mt-6">
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
              <Text className="text-lg font-semibold ">Edit Collection</Text>
              <Text className="text-md font-normal ">Sweetest Stitch</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView className="mt-[90px]">
        <View className="flex-col items-center ">
          <View className="bg-white p-4 shadow-sm rounded-xl">
            <View className="flex-row w-80">
              <Text className="text-sm font-bold mb-2">Collection Name</Text>
              <Text className="text-sm text-red">*</Text>
            </View>
            {/* <TextInput
            className=""
            onChangeText={(text) => setCollectionName(text)}
            value={collectionName}
            placeholder="Input collection name"
          /> */}
            <Text className="text-sm font-normal text-gray">
              The Essentials
            </Text>
          </View>
        </View>

        <View className="flex-col items-center mt-2">
          <View className="bg-white p-4 shadow-sm rounded-xl">
            <View className="flex-row w-80">
              <Text className="text-sm font-bold mb-2">Description</Text>
              <Text className="text-sm text-red">*</Text>
            </View>
            {/* <TextInput
            className=""
            onChangeText={(text) => setCollectionName(text)}
            value={collectionName}
            placeholder="Input collection description"
          /> */}
            <Text className="text-sm font-normal text-gray w-80">
              Embodies the epitome of effortless style and comfort, offering a
              curated selection of daily wear garments that seamlessly blend
              versatility with timeless design.
            </Text>
          </View>
        </View>

        <View className="flex-col items-center mt-2">
          <View className="bg-white p-4 shadow-sm rounded-xl">
            <View className="flex-row w-80">
              <Text className="text-sm font-bold mb-2">Upload Image</Text>
              <Text className="text-sm text-red">*</Text>
            </View>

            <TouchableOpacity>
              <View>
                <View className="flex-row items-center justify-center gap-x-2">
                  <Ionicons
                    name="cloud-upload-outline"
                    size={22}
                    color="gray"
                  />
                  <Text className="text-gray ">
                    Drop items here or browse image
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col items-center mt-2">
            <View className="bg-white p-4 shadow-sm rounded-xl">
              <View className="flex-row items-center justify-between w-80">
                <View className="flex-row items-center gap-x-2">
                  <Image
                    source={require("../../components/img/meng.jpg")}
                    className="w-16 h-16"
                  />
                  <View className="flex-col items-start ">
                    <Text className="font-semibold text-sm">Image1.png</Text>
                    <Text className="font-normal text-xs text-gray">10 MB</Text>
                  </View>
                </View>
                <Ionicons
                  name="close-outline"
                  size={25}
                />
              </View>
            </View>
          </View>
          <View className="flex-col items-center mt-2">
            <View className="bg-white p-4 shadow-sm rounded-xl">
              <View className="flex-row items-center justify-between w-80">
                <View className="flex-row items-center gap-x-2">
                  <Image
                    source={require("../../components/img/meng.jpg")}
                    className="w-16 h-16"
                  />
                  <View className="flex-col items-start ">
                    <Text className="font-semibold text-sm">Image1.png</Text>
                    <Text className="font-normal text-xs text-gray">10 MB</Text>
                  </View>
                </View>
                <Ionicons
                  name="close-outline"
                  size={25}
                />
              </View>
            </View>
          </View>

          <View className="flex-row justify-between mt-4 gap-x-2">
            <TouchableOpacity
              onPress={() => navigation.navigate("home-tailor")}>
              <View className="bg-emperor w-[170px] p-4 shadow-sm rounded-xl">
                <Text className="text-sm font-semibold text-white text-center">
                  Delete
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("home-tailor")}>
              <View className="bg-pink p-4 w-[170px] shadow-sm rounded-xl">
                <Text className="text-sm font-semibold text-white text-center">
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
