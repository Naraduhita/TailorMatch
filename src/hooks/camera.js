import { Camera } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import { Alert } from "react-native";

const useCamera = () => {
  const [startCamera, setStartCamera] = useState(false);
  const [cameraStatus, setCameraStatus] = useState("undetermined");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const cameraRef = useRef(null);

  const requestCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setCameraStatus("granted");
    } else {
      setCameraStatus("denied");
    }
  };

  const __takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    setCapturedImage(photo);
    setPreviewVisible(true); // Menampilkan foto yang diambil

    console.log("Picture taken:", photo);
  };

  const __resetPreview = () => {
    setCapturedImage(null);
    setPreviewVisible(false); // Menyembunyikan tampilan foto yang diambil
  };

  useEffect(() => {
    if (cameraStatus === "granted") {
      setStartCamera(true);
    } else if (cameraStatus === "denied") {
      Alert.alert("Access denied");
    }
  }, [cameraStatus]);

  useEffect(() => {
    return () => {
      setCapturedImage(null);
    };
  }, []);

  return {
    startCamera,
    __cameraPermissions: requestCameraPermissions,
    previewVisible,
    capturedImage,
    __takePicture,
    __resetPreview,
    cameraRef,
  };
};

export default useCamera;
