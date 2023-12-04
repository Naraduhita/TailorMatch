import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ItemCart from "../../components/Card/ItemCart";
import { useAuthContext } from "../../contexts/AuthContext";
import clothByOrderId from "../../api/orders/clothByOrderId";

export default function ViewCart() {
  const navigation = useNavigation();
  const [cartItemCount, setCartItemCount] = useState(1);
  const auth = useAuthContext();
  const route = useRoute();
  const { order_id, status, state, user_id } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const cloth_req = await clothByOrderId(user_token, order_id);

      if (cloth_req.data.status === "success") {
        const cloth = cloth_req.data.data;
        // setCartItemCount(cloth.length);
        setCartItems(cloth);
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <ScrollView>
        <SafeAreaView>
          <View className="mx-8">
            <ItemCart
              navigation={navigation}
              items={cartItems}
            />
            <ColoredButton
              title={"Add"}
              styleButton={"bg-old-rose w-full my-4 py-5 mt-12 rounded-2xl"}
              styleText={"text-white"}
              onPress={() => navigation.navigate("add-item", { order_id, status, state, user_id })}
            />
            <ColoredButton
              title={"Back"}
              styleButton={"bg-old-rose w-full my-4 py-5 mt-2 rounded-2xl"}
              styleText={"text-white"}
              onPress={() => navigation.navigate("main")}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </MeansuringTemplate>
  );
}
