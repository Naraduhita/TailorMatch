import * as React from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";

export default function Profile() {
  const navigation = useNavigation();
  const auth = useAuthContext();
  const [user, setUser] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const handlePress = (route) => {
    setModalVisible(false);
    navigation.navigate(route);
  };

  const checkUser = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user = await auth.getUser();
      setUser(user);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkUser();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Background>
      <ScrollView
        className="container flex-1 mb-5"
        showsVerticalScrollIndicator={false}>
        <View className="flex-col items-center">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              className="border-4 rounded-full w-36 h-36 border-pink"
              source={require("../components/img/meng.jpg")}
            />
          </TouchableOpacity>
          <Text className="mt-3 text-2xl font-bold">{user.email}</Text>
          <Text className="text-sm font-normal">ID: {user.id}</Text>
        </View>

        <View className="flex-col items-center mt-4">
          <View className="justify-start py-2 bg-white rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="person-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Account</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="globe-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Language</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="construct-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Preference</Text>
            </View>
          </View>

          <View className="justify-start py-2 mt-4 bg-white rounded-2xl w-72">
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="information-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Help & Center</Text>
            </View>
          </View>

          <TouchableOpacity
            className="justify-start py-2 mt-4 bg-white rounded-2xl w-72"
            onPress={() => auth.SignOut()}>
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="information-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Logout</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="justify-start py-2 mt-4 bg-white rounded-2xl w-72"
            onPress={() => navigation.navigate("get-started")}>
            <View className="flex-row items-center mx-6">
              <Ionicons
                name="information-circle-outline"
                size={50}
                color="#BA7E80"
              />
              <Text className="mx-2 text-xl font-semibold">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Dropdown */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 bg-transparant items-end mx-[350px] mt-48">
          <View className="bg-old-rose p-2 w-[160px] items-center rounded-xl">
            <TouchableOpacity onPress={() => handlePress("")}>
              <Text className="mb-1 text-base font-semibold text-white ">
                Take Photo
              </Text>
            </TouchableOpacity>
            {/* <View className="mt-2 border-b-2 border-b-white"></View> */}
            <TouchableOpacity onPress={() => handlePress("")}>
              <Text className="mb-1 text-base font-semibold text-white ">
                Upload Photo
              </Text>
            </TouchableOpacity>
            {/* Add more options as needed */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text className="text-base font-semibold text-black ">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
}
