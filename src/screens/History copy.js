import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import ItemHistory from "../components/Card/ItemHistory";
import { useNavigation } from "@react-navigation/native";
import history from "../api/auth/history.js";

export default function History() {
  const navigation = useNavigation();
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await history(); // Panggil fungsi history yang menggunakan Axios

        if (result.data.status === "success") {
          const formattedData = result.data.data.map((item, index) => ({
            // Mengakses result.data.data
            name: item.delivery_address,
            key: String(index + 1),
            date: item.order_date.split("T")[0],
            status:
              item.status.charAt(0).toUpperCase() +
              item.status.slice(1).toLowerCase(),
          }));

          setStore(formattedData);
        } else {
          console.error("Failed to fetch data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
                onPress={() => navigation.navigate("sewing")}
              />
            )}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </Background>
  );
}
