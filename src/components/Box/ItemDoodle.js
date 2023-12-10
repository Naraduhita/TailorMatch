import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import IconDoodle from "../../components/Box/IconDoodle";
import EssentsialSVG from "../../../assets/essentials.svg";
import StapleSVG from "../../../assets/staplepieces.svg";
import EleganSVG from "../../../assets/elegance.svg";
import IndepentenSVG from "../../../assets/independentWomen.svg";
import CollorFullSVG from "../../../assets/colorfull.svg";
import MapView, { Marker } from "react-native-maps";

export default function ItemDoodle({ tailor, longitude, latitude }) {
  const formattedDays = tailor.open_days.map((day) => {
    const formattedDay = day.charAt(0) + day.slice(1).toLowerCase();
    return formattedDay;
  });
  const joinedDays = formattedDays.join(", ");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mb-5">
      {/* <IconDoodle /> */}
      <View className="flex flex-col items-center justify-center my-3 gap-y-2">
        {tailor.description && (
          <Text className="font-light text-center">{tailor.description}</Text>
        )}
        <View className="flex flex-col">
          <Text className="text-center">Open Days</Text>
          <Text className="font-light text-center">{joinedDays}</Text>
        </View>
        <View className="flex flex-col">
          <Text className="text-center">Address</Text>
          <Text className="font-light text-center">{tailor.address}</Text>
        </View>
      </View>
      <Text className="px-4 font-bold text-center">Our Collection</Text>
      <View className="px-4 mt-1 mb-4">
        {tailor.TailorImage.map((image) => (
          <View
            className="h-56 w-fit"
            key={image.id}>
            <Image
              source={{ uri: image.image_url }}
              style={{
                width: "100%",
                height: "90%",
                resizeMode: "cover",
                borderRadius: 20,
              }}
            />
          </View>
        ))}
      </View>

      <Text className="px-4 mb-2 font-bold text-center">Maps View</Text>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        className="w-full border-2 border-gray"
        style={[{ height: 300 }]}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title="Delivery Location"
          description="This is the delivery location"
          identifier="destination"
        />
      </MapView>
    </ScrollView>
  );
}
