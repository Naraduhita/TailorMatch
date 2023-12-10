import {
  View,
  Text,
  ScrollView,
  Alert,
  Modal,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ItemCart from "../../components/Card/ItemCart";
import { useAuthContext } from "../../contexts/AuthContext";
import clothByOrderId from "../../api/orders/clothByOrderId";
import Loading from "../../components/Loading";
import updateStateOrder from "../../api/orders/update-state-order";

export default function ViewCart() {
  const navigation = useNavigation();
  const [cartItemCount, setCartItemCount] = useState(1);
  const auth = useAuthContext();
  const route = useRoute();
  const { order_id, user_id, isUser, state } = route.params;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const getData = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const cloth_req = await clothByOrderId(user_token, order_id);

      if (cloth_req.data.status === "success") {
        const cloth = cloth_req.data.data;
        setCartItems(cloth);
        setLoading(false);
      }
    }
  };

  const nextState = (state) => {
    switch (state) {
      case "MEASURING":
        return "SEWING";
      case "SEWING":
        return "FITTING";
      case "FITTING":
        return "DELIVER";
      case "DELIVER":
        return "DONE";

      default:
        return "CANCELLED";
    }
  };

  const updateStatus = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const update_order = await updateStateOrder(
        user_token,
        order_id,
        nextState(state),
      );

      if (update_order.data.status == "success") {
        Alert.alert("Success updating order status");
        setModalVisible(false);
        setLoading(true);
        navigation.navigate("main");
        state = nextState(state);
      } else {
        Alert.alert("Error updating order status");
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          className="w-full h-full opacity-80"
          style={{ flex: 1, backgroundColor: "black" }}>
          <View className="flex flex-col items-center self-center justify-center w-3/4 p-4 my-auto bg-white rounded-lg">
            <Text className="mb-5 text-base font-semibold text-center">
              Update status order into {nextState(state)}?
            </Text>
            <View className="flex flex-row items-center justify-around w-full pt-2 border-t">
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                className="w-1/2">
                <Text className="text-center">No</Text>
              </TouchableOpacity>
              <View className="h-full border-l"></View>
              <TouchableOpacity
                onPress={() => {
                  updateStatus();
                }}
                className="w-1/2">
                <Text className="text-center">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View className="flex flex-col justify-between mx-3">
          <ItemCart
            navigation={navigation}
            items={cartItems}
          />
          <View className="justify-self-end">
            <ColoredButton
              title={
                nextState(state).toLowerCase().charAt(0).toUpperCase() +
                nextState(state).toLowerCase().slice(1)
              }
              styleButton={"bg-old-rose w-full my-4 py-5 rounded-2xl"}
              styleText={"text-white"}
              onPress={() => setModalVisible(true)}
            />
            {isUser == false && (
              <ColoredButton
                title={"Add"}
                styleButton={"bg-old-rose w-full my-4 py-5 rounded-2xl"}
                styleText={"text-white"}
                onPress={() =>
                  navigation.navigate("add-item", {
                    order_id,
                    user_id,
                    state,
                  })
                }
              />
            )}
            <ColoredButton
              title={"Back"}
              styleButton={"bg-old-rose w-full my-4 py-5 mt-2 rounded-2xl"}
              styleText={"text-white"}
              onPress={() => navigation.navigate("main")}
            />
          </View>
        </View>
      </ScrollView>
    </MeansuringTemplate>
  );
}
