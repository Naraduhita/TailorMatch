import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import ItemHistory from "../components/Card/ItemHistory";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import history from "../api/order/history.js";
import { useAuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";

export default function History() {
  const navigation = useNavigation();
  const [store, setStore] = useState([]);
  const auth = useAuthContext();
  const [token, setToken] = useState("");
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);

  const fetchData = async (user_token) => {
    try {
      const result = await history(user_token);

      if (result.data.status === "success") {
        const formattedData = result.data.data.map((item, index) => ({
          name: item.delivery_address,
          key: String(index + 1),
          date: item.order_date.split("T")[0],
          status: item.state.toUpperCase(),
          order_id: item.id,
          state: item.state,
        }));

        setStore(formattedData);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();
    const userData = await auth.getUser();
    setUser(JSON.stringify(userData));

    if (user.role == "USER") {
      setIsUser(true);
    }

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      fetchData(user_token);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

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
        <View className="mx-5 mb-5">
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="m-2" />}
            keyExtractor={(item) => item.key}
            data={store}
            renderItem={({ item }) => (
              <ItemHistory
                item={item}
                onPress={() => {
                  if (item.state === "DELIVER" && isUser == true) {
                    navigation.navigate("deliver", { order_id: item.order_id });
                  } else if (item.state === "SEWING" && isUser == true) {
                    navigation.navigate("sewing", {
                      order_id: item.order_id,
                      state: item.state,
                    });
                  } else if (item.state === "FITTING" && isUser == true) {
                    navigation.navigate("sewing", {
                      order_id: item.order_id,
                      state: item.state,
                    });
                  } else if (item.state === "MEASURING") {
                    navigation.navigate("view-cart", {
                      order_id: item.order_id,
                      user_id: user.id,
                      isUser,
                      state: item.state,
                    });
                  } else if (item.state === "PAYMENT") {
                    navigation.navigate("bills", { order_id: item.order_id });
                  } else if (item.state === "SEWING" && isUser == false) {
                    navigation.navigate("view-cart", {
                      order_id: item.order_id,
                      user_id: user.id,
                      isUser,
                      state: item.state,
                    });
                  } else if (item.state === "FITTING" && isUser == false) {
                    navigation.navigate("view-cart", {
                      order_id: item.order_id,
                      user_id: user.id,
                      isUser,
                      state: item.state,
                    });
                  } else if (item.state === "DELIVER" && isUser == false) {
                    navigation.navigate("view-cart", {
                      order_id: item.order_id,
                      user_id: user.id,
                      isUser,
                      state: item.state,
                    });
                  } else if (item.state === "DONE" && isUser == false) {
                    navigation.navigate("bills", { order_id: item.order_id });
                  }
                }}
              />
            )}
          />
        </View>
      )}
    </Background>
  );
}
