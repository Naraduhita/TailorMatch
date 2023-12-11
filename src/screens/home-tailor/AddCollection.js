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
import createTailor from "../../api/tailors/createTailor";
import { useAuthContext } from "../../contexts/AuthContext";
import { CameraCapturedPicture } from "expo-camera";
import { useCameraContext } from "../../contexts/CameraContext";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../../components/Card/ImageCard";
import getTailorMe from "../../api/tailors/get-tailor-me";

export default function AddCollection() {
  const navigation = useNavigation();
  const auth = useAuthContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [opening_time, setOpenTime] = useState("");
  const [closing_time, setCloseTime] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const cam_navigation = useNavigation();
  const { cameraHook } = useCameraContext();
  const { capturedImage, __resetPreview } = cameraHook;
  const [imageRes, setImageRes] = useState(null);

  useEffect(() => {
    if (capturedImage) {
      setImageRes(capturedImage);
    }
    getMe();

    return () => {
      setName("");
      setDescription("");
      setAddress("");
      setOpenTime("");
      setCloseTime("");
      setImageRes(null);
    };
  }, [capturedImage]);

  const tailorCreate = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const token = await auth.getToken();
      const response = await createTailor({
        name,
        description,
        address,
        opening_time,
        closing_time,
        token,
      });
    }
  };

  const getMe = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const token = await auth.getToken();
      const response = await getTailorMe(token);
      setName(response.data.data.name);
      setDescription(response.data.data.description);
      setAddress(response.data.data.address);
      setOpenTime(response.data.data.opening_time);
      setCloseTime(response.data.data.closing_time);
    }
  };

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
            <Text className="text-lg font-semibold ">Create Tailor</Text>
            <Text className="font-normal text-md ">Tailor</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            tailorCreate();
          }}
          className="absolute w-full bottom-3">
          <View className="p-4 shadow-sm bg-pink rounded-xl">
            <Text className="text-sm font-semibold text-center text-white">
              Save
            </Text>
          </View>
        </TouchableOpacity>

        <ScrollView
          className="my-4 mb-20"
          showsVerticalScrollIndicator={false}>
          <View className="flex flex-col items-start justify-center gap-y-3">
            <View className="flex-col items-center w-full">
              <View className="w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row">
                  <Text className="mb-2 text-sm font-bold">Tailor Name</Text>
                  <Text className="text-sm text-red">*</Text>
                </View>
                <TextInput
                  className=""
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholder="Input tailor name"
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
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                  placeholder="Input tailor description"
                />
              </View>
            </View>

            <View className="flex-col items-center w-full">
              <View className="w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row">
                  <Text className="mb-2 text-sm font-bold">Address</Text>
                  <Text className="text-sm text-red">*</Text>
                </View>
                <TextInput
                  className=""
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                  placeholder="Input tailor address"
                />
              </View>
            </View>

            <View className="flex-col items-center w-full">
              <View className="w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row">
                  <Text className="mb-2 text-sm font-bold">Opening Time</Text>
                  <Text className="text-sm text-red">*</Text>
                </View>
                <TextInput
                  className=""
                  value={opening_time}
                  onChangeText={(text) => setOpenTime(text)}
                  placeholder="Input tailor opening time"
                />
              </View>
            </View>

            <View className="flex-col items-center w-full">
              <View className="w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row">
                  <Text className="mb-2 text-sm font-bold">Closing Time</Text>
                  <Text className="text-sm text-red">*</Text>
                </View>
                <TextInput
                  className=""
                  value={closing_time}
                  onChangeText={(text) => setCloseTime(text)}
                  placeholder="Input tailor closing time"
                />
              </View>
            </View>

            <View className="flex-col items-center w-full">
              <View className="w-full p-4 bg-white shadow-sm rounded-xl">
                <View className="flex-row">
                  <Text className="mb-2 text-sm font-bold">Upload Image</Text>
                  <Text className="text-sm text-red">*</Text>
                </View>

                <TouchableOpacity
                  onPress={() => cam_navigation.navigate("camera")}>
                  {/* <TouchableOpacity onPress={handleImageUpload}> */}
                  <View style={{ marginTop: 10 }}>
                    {imageUri ? (
                      <Image
                        source={imageRes}
                        style={{ width: 80, height: 80, borderRadius: 10 }}
                      />
                    ) : (
                      <View className="flex-row items-center justify-center gap-x-2">
                        <Ionicons
                          name="cloud-upload-outline"
                          size={22}
                          color="gray"
                        />
                        <Text className="text-gray ">Take Picture</Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {imageRes && <ImageCard image={imageRes} />}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
