import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [locationStatus, setLocationStatus] = useState("undetermined");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState("Location");
  const [loading, setLoading] = useState(false);

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

      const [address] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      console.log(address);

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
  };
};

export default useLocation;
