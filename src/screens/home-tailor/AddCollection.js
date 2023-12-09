import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, Icon } from "@expo/vector-icons";

export default function AddCollection({ navigation }) {
  const [collectionName, setCollectionName] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handleImageUpload = () => {
    const randomImage =
      Math.random() < 0.5
        ? require("../../components/img/catalog-tailor.png")
        : require("../../components/img/user1.jpg");

    setImageUri(randomImage);
  };

  return (
    <SafeAreaView className="container flex-1">
      <View className="flex flex-col h-full mx-5 gap-y-4">
        <View className="flex-row items-center">
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
            <Text className="text-lg font-semibold ">Add Collection</Text>
            <Text className="font-normal text-md ">Sweetest Stitch</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("main")}
          className="absolute w-full bottom-3">
          <View className="p-4 shadow-sm bg-pink rounded-xl">
            <Text className="text-sm font-semibold text-center text-white">
              Save
            </Text>
          </View>
        </TouchableOpacity>

        <View className="flex flex-col items-start justify-center gap-y-3">
          <View className="flex-col items-center w-full">
            <View className="w-full p-4 bg-white shadow-sm rounded-xl">
              <View className="flex-row">
                <Text className="mb-2 text-sm font-bold">Collection Name</Text>
                <Text className="text-sm text-red">*</Text>
              </View>
              <TextInput
                className=""
                onChangeText={(text) => setCollectionName(text)}
                value={collectionName}
                placeholder="Input collection name"
              />
            </View>
          </View>

          <View className="flex-col items-center w-full">
            <View className="w-full p-4 bg-white shadow-sm rounded-xl">
              <View className="flex-row">
                <Text className="mb-2 text-sm font-bold">Description</Text>
                <Text className="text-sm text-red">*</Text>
              </View>
              <TextInput
                className=""
                onChangeText={(text) => setCollectionName(text)}
                value={collectionName}
                placeholder="Input collection description"
              />
            </View>
          </View>

          <View className="flex-col items-center w-full">
            <View className="w-full p-4 bg-white shadow-sm rounded-xl">
              <View className="flex-row">
                <Text className="mb-2 text-sm font-bold">Upload Image</Text>
                <Text className="text-sm text-red">*</Text>
              </View>

              <TouchableOpacity onPress={handleImageUpload}>
                <View style={{ marginTop: 10 }}>
                  {imageUri ? (
                    <Image
                      source={imageUri}
                      style={{ width: 80, height: 80, borderRadius: 10 }}
                    />
                  ) : (
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
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
