import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LatarPage from "../components/LatarPage";
import NotificationSymbol from "../../assets/notification.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "../components/Bar/SearchBar";
import { useAuthContext } from "../contexts/AuthContext";
import getAllTailors from "../api/tailors/getAllTailors";
import useLocation from "../hooks/Location";
import HomeTailor from "./home-tailor/HomeTailor";
import Loading from "../components/Loading";
import getNearestTailor from "../api/tailors/get-nearest-tailor";
import getFavoriteTailor from "../api/tailors/get-favorite";

export default function HomeScreen() {
  const navigation = useNavigation();
  const auth = useAuthContext();
  const [tailors, setTailors] = React.useState([]);
  const [tailorNearest, setTailorsNearest] = React.useState([]);
  const [tailorFavorite, setTailorsFavorite] = React.useState([]);
  const [isUser, setIsUser] = React.useState(false);
  const {
    __getLocation,
    __locationPermissions,
    locationName,
    latitude,
    longitude,
  } = useLocation();
  const [loading, setLoading] = React.useState(true);

  const truncateName = (name, cutNumber) => {
    if (name.length > cutNumber) {
      return name.slice(0, cutNumber) + "...";
    }
    return name;
  };

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const tailors = await getAllTailors(user_token);
      const nearest = await getNearestTailor(user_token, latitude, longitude);
      const favorites = await getFavoriteTailor(user_token);
      setTailors(tailors.data.data);
      setTailorsNearest(nearest.data.data);
      setTailorsFavorite(favorites.data.data);
      setLoading(false);
    } else {
      navigation.navigate("login");
    }
  };

  const checkUser = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user = await auth.getUser();
      if (user.role == "USER") {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    } else {
      navigation.navigate("login");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      checkUser();
      getData();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {isUser ? (
        <LatarPage>
          <ScrollView
            className="mx-5 my-5"
            showsVerticalScrollIndicator={false}>
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                className="flex justify-start w-2/3 mt-1 flex-col-2"
                onPress={() => {
                  __locationPermissions();
                  __getLocation();
                }}>
                <Text className="text-xs text-maroon">Current Location</Text>
                <View className="flex flex-row items-center mt-1 gap-x-1">
                  <Ionicons
                    name="location"
                    size={15}
                    color="#ba7e80"
                  />
                  <Text className="w-full font-semibold">{locationName}</Text>
                </View>
              </TouchableOpacity>
              <NotificationSymbol />
              <TouchableOpacity onPress={() => reload()}>
                <Ionicons
                  name="reload"
                  size={23}
                  color="#545454"
                />
              </TouchableOpacity>
            </View>

            <SearchBar />

            <View className="flex flex-col my-4 gap-y-2">
              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-base font-bold">Top Choises</Text>
                  <Text className="text-xs font-medium text-maroon">
                    See More
                  </Text>
                </View>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {tailors &&
                    tailors.map((tailor) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("detail-tailor", { tailor })
                        }
                        key={tailor.id}
                        className="flex flex-col items-start justify-between w-40 h-40 mr-2 bg-white rounded-2xl">
                        {tailor.TailorImage[0] ? (
                          <Image
                            source={{ uri: tailor.TailorImage[0].image_url }}
                            style={{
                              width: "90%",
                              height: "70%",
                              resizeMode: "cover",
                              borderRadius: 20,
                            }}
                            className="self-center mx-2 my-2 rounded-md"
                          />
                        ) : (
                          <View className="bg-[#fadadd] mx-2 my-2 rounded-md h-28 w-36"></View>
                        )}
                        <Text className="px-2 mb-2 text-sm font-bold">
                          {truncateName(tailor.name, 18)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>

              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-base font-bold">Tailor Nearby</Text>
                  <Text className="text-xs font-medium text-maroon">
                    See More
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {tailorNearest &&
                    tailorNearest.map((tailor) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("detail-tailor", { tailor })
                        }
                        key={tailor.id}
                        className="flex flex-col items-start justify-between w-40 h-40 mr-2 bg-white rounded-2xl">
                        {tailor.TailorImage[0] ? (
                          <Image
                            source={{ uri: tailor.TailorImage[0].image_url }}
                            style={{
                              width: "90%",
                              height: "70%",
                              resizeMode: "cover",
                              borderRadius: 20,
                            }}
                            className="self-center mx-2 my-2 rounded-md"
                          />
                        ) : (
                          <View className="bg-[#fadadd] mx-2 my-2 rounded-md h-28 w-36"></View>
                        )}
                        <Text className="px-2 mb-2 text-sm font-bold">
                          {truncateName(tailor.name, 18)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>

              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-base font-bold">History Tailor</Text>
                  <Text className="text-xs font-medium text-maroon">
                    See More
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {tailorFavorite &&
                    tailorFavorite.map((tailor) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("detail-tailor", {
                            tailor: tailor.Tailors,
                          })
                        }
                        key={tailor.Tailors.id}
                        className="flex flex-col items-start justify-between w-40 h-40 mr-2 bg-white rounded-2xl">
                        {tailor.Tailors.TailorImage[0] ? (
                          <Image
                            source={{
                              uri: tailor.Tailors.TailorImage[0].image_url,
                            }}
                            style={{
                              width: "90%",
                              height: "70%",
                              resizeMode: "cover",
                              borderRadius: 20,
                            }}
                            className="self-center mx-2 my-2 rounded-md"
                          />
                        ) : (
                          <View className="bg-[#fadadd] mx-2 my-2 rounded-md h-28 w-36"></View>
                        )}
                        <Text className="px-2 mb-2 text-sm font-bold">
                          {truncateName(tailor.Tailors.name, 18)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </LatarPage>
      ) : (
        <HomeTailor />
      )}
    </>
  );
}
