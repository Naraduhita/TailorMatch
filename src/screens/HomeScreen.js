import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LatarPage from "../components/LatarPage";
import NotificationSymbol from "../../assets/notification.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "../components/Bar/SearchBar";
import { useAuthContext } from "../contexts/AuthContext";
import getAllTailors from "../api/tailors/getAllTailors";
import useLocation from "../hooks/Location";
import HomeTailor from "./home-tailor/HomeTailor";

export default function HomeScreen() {
  const navigation = useNavigation();
  const auth = useAuthContext();
  const [tailors, setTailors] = React.useState([]);
  const [isUser, setIsUser] = React.useState(false);
  const { __getLocation, __locationPermissions, locationName, loading } =
    useLocation();

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
      setTailors(tailors.data.data);
    } else {
      navigation.navigate("Login");
    }
  };

  const checkUser = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user = await auth.getUser();
      console.log("userrrrrrrrrrrrrrr", user.role);
      if (user.role == "USER") {
        setIsUser(true);
      } else {
        setIsUser(false);
        getData();
      }
    } else {
      navigation.navigate("Login");
    }
  };

  React.useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    console.log("reload");
    checkUser();
    // getData();
  };

  console.log("user kahh", isUser);

  // console.log("tailors");
  // console.log(tailors[0]);
  return (
    <>
      {isUser ? (
        <LatarPage>
          <View className="mx-5 my-5">
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

            <ScrollView
              className="flex flex-col my-4 gap-y-2"
              showsVerticalScrollIndicator={false}>
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
                  {[
                    "Petite Posies",
                    "Playful Pattern",
                    "Lovely Shirt",
                    4,
                    5,
                    6,
                  ].map((nearby, index) => (
                    <View
                      key={nearby}
                      className="w-40 h-40 mr-2 bg-white rounded-2xl">
                      <View className="flex-row items-center justify-between px-2 mt-28">
                        <Text className="font-bold">{nearby}</Text>
                        <Text className="text-xs font-light text-old-rose">
                          {["200m", "300m", "400m", 4, 5, 6][index]}
                        </Text>
                      </View>
                      <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                    </View>
                  ))}
                </ScrollView>
              </View>

              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-base font-bold">Inspiration</Text>
                  <Text className="text-xs font-medium text-maroon">
                    See More
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {["Jakarta Fashion Week", "ESMOD Graduation", 3, 4, 5, 6].map(
                    (nearby) => (
                      <View
                        key={nearby}
                        className="w-40 h-40 mr-2 bg-white rounded-2xl">
                        <Text className="px-2 font-bold mt-28 ">{nearby}</Text>
                        <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                      </View>
                    ),
                  )}
                </ScrollView>
              </View>

              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-base font-bold">Favorite</Text>
                  <Text className="text-xs font-medium text-maroon">
                    See More
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {["Easy Breezy Apparel", "Snuggly Chic", 3, 4, 5, 6].map(
                    (nearby) => (
                      <View
                        key={nearby}
                        className="w-40 h-40 mr-2 bg-white rounded-2xl">
                        <Text className="px-2 font-bold mt-28 ">{nearby}</Text>
                        <View className="bg-[#fadadd] mb-12 absolute top-2 left-2 right-2 bottom-2 rounded-md"></View>
                      </View>
                    ),
                  )}
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </LatarPage>
      ) : (
        // <View>
        //   <Text>INI TAILOR</Text>
        //   <TouchableOpacity
        //     onPress={() => navigation.navigate("create-order-tailor")}
        //     className="bg-red_button">
        //     <Text>Create order</Text>
        //   </TouchableOpacity>
        // </View>
        <HomeTailor />
      )}
    </>
  );
}
