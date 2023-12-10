import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import ItemHistory from "../components/Card/ItemHistory";
import { useNavigation } from "@react-navigation/native";
import history from "../api/order/history.js";
import { useAuthContext } from "../contexts/AuthContext";

export default function History() {
  const navigation = useNavigation();
  const [store, setStore] = useState([]);
  const auth = useAuthContext();

  useEffect(() => {
    const getData = async () => {
      const isLoggedIn = await auth.CheckToken();

      if (isLoggedIn) {
        const user_token = await auth.getToken();
        fetchData(user_token);
      }
    };

    const fetchData = async (user_token) => {
      try {
        const result = await history(user_token); // Panggil fungsi history yang menggunakan Axios
        console.log(result);
        // console.log(result.data.data[0].state);
        if (result.data.status === "success") {
          const formattedData = result.data.data.map((item, index) => ({
            // Mengakses result.data.data
            name: item.delivery_address,
            key: String(index + 1),
            date: item.order_date.split("T")[0],
            // status:
            //   item.status.charAt(0).toUpperCase() +
            //   item.status.slice(1).toLowerCase(),
            order_id: item.id,
            state:
              item.state.charAt(0).toUpperCase() +
              item.state.slice(1).toLowerCase(),
          }));

          setStore(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
    // fetchData();
  }, []);

  console.log("store");
  console.log(store);

  return (
    <Background>
      {store.length === 0 ? (
        <>
          <Image
            source={require("../../assets/tabler_hanger-off.png")}
            className="w-24 h-24"
          />
          <Text
            className="text-lg font-bold text-black"
            onPress={() => navigation.navigate("History")}>
            No tailor history yet
          </Text>
          <Text className="mt-3 text-black">Embrace the blank canvas</Text>
          <Text className="text-black">
            and start your tailoring journey today!
          </Text>
        </>
      ) : (
        <View className="mx-5">
          <FlatList
            keyExtractor={(item) => item.key}
            data={store}
            renderItem={({ item }) => (
              <ItemHistory
                item={item}
                onPress={() => {
                  // console.log("Order ID:", item.order_id); // Memeriksa nilai order_id
                  // navigation.navigate("sewing", { order_id: item.order_id });
                  if (item.state === "AWAITING") {
                    navigation.navigate("sewing", { order_id: item.order_id });
                  } else if (item.state === "DELIVER") {
                    navigation.navigate("deliver", { order_id: item.order_id });
                  } else if (item.state === "SEWING") {
                    navigation.navigate("sewing", { order_id: item.order_id });
                  } else if (item.state === "FITTING") {
                    navigation.navigate("sewing", { order_id: item.order_id });
                  } else if (item.state === "MEASURING") {
                    navigation.navigate("sewing", { order_id: item.order_id });
                  }
                }}
              />
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
