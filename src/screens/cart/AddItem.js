import { View, Text, TextInput } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TagDolarSVG from "../../../assets/tagdolar.svg";
import { useAuthContext } from "../../contexts/AuthContext";
import createCloth from "../../api/orders/createCloth";

export default function AddItem() {
  const navigation = useNavigation();
  const [clothName, setClothName] = React.useState("");
  const [errorCloth, setErrorCloth] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [errorQuantity, setErrorQuantity] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [errorPrice, setErrorPrice] = React.useState("");
  const auth = useAuthContext();
  const route = useRoute();
  const { order_id, user_id, state } = route.params;

  React.useEffect(() => {
    return () => {
      setClothName("");
      setQuantity(0);
      setPrice(0);
    };
  }, []);

  const addCloth = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const user = await auth.getUser();
      let isUser = false;

      if (user.role == "USER") {
        isUser = true;
      }

      const cloth_req = await createCloth({
        cloth: clothName,
        order_id,
        user_token,
        price,
        quantity,
      });

      if (cloth_req.data.status === "success") {
        const cloth = cloth_req.data.data;
        navigation.navigate("view-cart", {
          order_id,
          state,
          isUser,
          user_id,
        });

        setClothName("");
        setQuantity(0);
        setPrice(0);
      }
    }
  };

  const checkInput = () => {
    if (clothName === "") {
      setErrorCloth("Please input name of order");
    } else {
      setErrorCloth("");
    }

    if (quantity === 0) {
      setErrorQuantity("Please input number of order");
    } else {
      setErrorQuantity("");
    }

    if (price === 0) {
      setErrorPrice("Please input price");
    } else {
      setErrorPrice("");
    }

    if (clothName !== "" && quantity !== 0 && price !== 0) {
      addCloth();
    }
  };

  return (
    <MeansuringTemplate title={"Cart Items"}>
      <View className="mx-2">
        <View className="items-start justify-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
          <View className="flex flex-row">
            <Text>Name of Order</Text>
            <Text className="text-[#FF0000] mx-1">*</Text>
          </View>
          <TextInput
            placeholder="Input Name of Order"
            className="py-1"
            onChangeText={(clothName) => setClothName(clothName)}
            value={clothName}
          />
          {!!errorCloth && (
            <Text className="text-xs text-red">{errorCloth}</Text>
          )}
        </View>

        <View className="flex flex-row w-full mt-4 ">
          <View className="w-2/3 px-5 py-1 bg-white rounded-lg flex-row-3">
            <View className="flex flex-row">
              <Text>Number of Order</Text>
              <Text className="text-[#FF0000] mx-1">*</Text>
            </View>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              className="text-left"
              onChangeText={(quantity) => setQuantity(quantity)}
              value={quantity}
            />
            {!!errorQuantity && (
              <Text className="text-xs text-red">{errorQuantity}</Text>
            )}
          </View>
          <Text className="w-1/3 text-[#FF0000] px-2 pt-3 text-xs">
            *In numerical form
          </Text>
        </View>

        <View className="flex flex-row items-start justify-between w-full px-5 py-4 mt-3 bg-white rounded-2xl">
          <View className="flex flex-row items-center justify-center">
            <TagDolarSVG />
            <Text className="px-1">Price</Text>
            <Text className="text-[#FF0000] mx-1">*</Text>
          </View>
          <View className="flex flex-col">
            <TextInput
              placeholder="Rp"
              keyboardType="numeric"
              onChangeText={(price) => setPrice(price)}
              value={price}
            />
            {!!errorPrice && (
              <Text className="text-xs text-red">{errorPrice}</Text>
            )}
          </View>
        </View>

        <ColoredButton
          title={"Add"}
          styleButton={"bg-old-rose w-full my-4 py-5 mt-28 rounded-2xl"}
          styleText={"text-white"}
          onPress={() => {
            checkInput();
          }}
        />
      </View>
    </MeansuringTemplate>
  );
}
