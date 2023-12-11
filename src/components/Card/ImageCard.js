import React from "react";
import { View, ImageBackground, Image } from "react-native";

const ImageCard = ({ image }) => {
  return (
    <View
      className="w-full"
      style={{ maxHeight: 500 }}>
      <ImageBackground
        source={{ uri: image.uri }}
        style={{ width: "100%", height: "100%" }}>
        <Image
          source={{ uri: image.uri }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

export default ImageCard;
