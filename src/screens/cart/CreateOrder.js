import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Feather from "@expo/vector-icons/Feather";
import { useAuthContext } from "../../contexts/AuthContext";
import createOrder from "../../api/orders/create";

export default function CreateOrder() {
  const navigation = useNavigation();
  const auth = useAuthContext();

  const [values, setValues] = useState({
    date: null,
  });
  const data = [
    {
      status: "Onging",
      id: 1,
    },
    {
      status: "Cancelled",
      id: 2,
    },
    {
      status: "Done",
      id: 3,
    },
    {
      status: "Awaiting",
      id: 4,
    },
    {
      status: "Measuring",
      id: 5,
    },
    {
      status: "Sewing",
      id: 6,
    },
    {
      status: "Fitting",
      id: 7,
    },
    {
      status: "Deliver",
      id: 8,
    },
  ];

  const orderRequest = async () => {
    console.log("Order request");
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const response = await createOrder({
        delivery_address: address,
        due_date: date,
        email: email,
        status: status,
        user_token,
      });
      console.log("masuk create order");
      console.log(response.status);

      if (response.data.status === "success") {
        navigation.navigate("empty-cart", {
          order_id: response.data.data.id,
          status: response.data.data.status,
          state: response.data.data.state,
          user_id: response.data.data.user_id,
        });
      }
    }
  };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isDropdown, setDropdown] = useState(false);
  const [status, setStatus] = useState("Ongoing");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setValues({ ...values, date });
    hideDatePicker();
  };

  const handleStatusChange = (status) => {
    setValues({ ...values, status });
  };

  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    setDate(date.toLocaleDateString(undefined, options));
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <MeansuringTemplate title={"Create Order"}>
      <View className="mx-8">
        <View className="items-start justify-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
          <View className="flex flex-row">
            <Text>Email</Text>
            <Text className="text-[#FF0000] mx-1">*</Text>
          </View>
          <TextInput
            placeholder="Input Customer Email"
            className="py-1"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </View>

        <View className="items-start justify-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
          <View className="flex flex-row">
            <Text>Address</Text>
            <Text className="text-[#FF0000] mx-1">*</Text>
          </View>
          <TextInput
            placeholder="Input Full Address"
            className="py-1"
            onChangeText={(address) => setAddress(address)}
            value={address}
          />
        </View>

        <View className="flex flex-row items-center justify-between w-full mt-8 ">
          <Text className="font-semibold">Due Date :</Text>
          <View className="px-2 py-1 bg-white rounded-lg flex-row-3">
            <View>
              <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  onChangeText={(date) => setDate(date)}
                  value={date}
                  // value={formatDate(values.date)}
                  // editable={false}
                  // style={{ color: values.date ? "black" : "gray" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        /> */}

        <View className="flex flex-row items-center justify-between w-full mt-3 ">
          <Text className="font-semibold">Status :</Text>
          <TouchableOpacity
            className="flex flex-row items-center justify-between h-8 bg-white rounded-lg w-28"
            onPress={() => {
              setDropdown((prevVal) => !prevVal);
            }}>
            <Text className="ml-2 font-semibold">{status}</Text>
            <View className="mx-2">
              <Feather
                name="chevron-down"
                size={15}
                color="#ba7e80"
              />
            </View>
            {isDropdown && (
              <FlatList
                className="absolute left-0 w-full p-2 bg-white rounded-md top-10"
                data={data}
                nestedScrollEnabled
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setStatus(item.status);
                      setDropdown(false);
                    }}>
                    <Text>{item.status}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View className="h-2" />}
              />
            )}
          </TouchableOpacity>
        </View>

        <ColoredButton
          title={"Create Order"}
          styleButton={"bg-old-rose w-full my-4 py-5 mt-48 rounded-2xl"}
          styleText={"text-white"}
          onPress={() => {
            orderRequest();
          }}
        />
      </View>
    </MeansuringTemplate>
  );
}
