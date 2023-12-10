import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [locationStatus, setLocationStatus] = useState("undetermined");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState("Location");
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const __locationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      setLocationStatus("granted");
      await Location.requestBackgroundPermissionsAsync();
    } else {
      setLocationStatus("denied");
    }
  };

  const __getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLoading(true);

      if (status !== "granted") {
        console.error("Location permission not granted.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      const [address] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const formattedAddress = `${address.district}, ${address.city}, ${address.subregion}, ${address.region}, ${address.country}`;
      setLocationName(formattedAddress);
      setLoading(false);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  return {
    __locationPermissions,
    __getLocation,
    locationName,
    loading,
    latitude,
    longitude,
  };
};

export default useLocation;
