import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Dimensions, Alert } from "react-native";
import { Camera } from "expo-camera";
import { useTailwind } from "tailwind-rn";
import { Icon } from "@rneui/base";
// import { Ionicons, Feather, Icon } from "@expo/vector-icons";
import { useCameraContext } from "../../contexts/CameraContext";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen() {
  // const CameraScreen = () => {
  const tw = useTailwind();
  const [type, setType] = useState(Camera.Constants.Type.back); // Type definitions removed
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const screenAspectRatio = screenWidth / screenHeight;
  const { cameraHook } = useCameraContext();
  const { __takePicture, cameraRef, __cameraPermissions } = cameraHook;
  const navigation = useNavigation();

  useEffect(() => {
    __cameraPermissions();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  }

  const handleTakePicture = async () => {
    await __takePicture(); // Ambil foto menggunakan fungsi __takePicture
    Alert.alert("successfully taken a photo"); // Tampilkan pesan setelah foto diambil
  };

  return (
    <View className="flex-1 justify-center">
      <Camera
        ref={cameraRef}
        className="flex-1"
        style={{ aspectRatio: screenAspectRatio }}
        type={type}>
        <View className="flex flex-row flex-1 items-end bottom-3 justify-around">
          {/* flip camera start */}
          <TouchableOpacity
            className="bg-white rounded-full p-5"
            onPress={toggleCameraType}>
            <Icon
              name="camera-reverse"
              type="ionicon"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* flip camera end */}

          {/* button start */}
          <TouchableOpacity
            className="bg-white rounded-full p-5"
            onPress={handleTakePicture}>
            <Icon
              name="camera"
              type="entypo"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* button end */}

          {/* next start */}
          <TouchableOpacity
            className="bg-white rounded-full p-5"
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrowright"
              type="antdesign"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* next end */}
        </View>
      </Camera>
    </View>
  );
}
