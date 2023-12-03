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

export default function CreateOrder() {
  const navigation = useNavigation();

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
  ];

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isDropdown, setDropdown] = useState(false);
  const [status, setStatus] = useState("Ongoing");

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
      return ""; // Return an empty string for placeholder
    }

    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <MeansuringTemplate title={"Create Order"}>
      <SafeAreaView>
        <View className="mx-8">
          <View className="justify-start items-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
            <View className="flex flex-row">
              <Text>Email</Text>
              <Text className="text-[#FF0000] mx-1">*</Text>
            </View>
            <TextInput
              placeholder="Input Customer Email"
              className="py-1"
            />
          </View>

          <View className="justify-start items-start w-full px-5 py-4 mt-3 bg-white rounded-2xl">
            <View className="flex flex-row">
              <Text>Address</Text>
              <Text className="text-[#FF0000] mx-1">*</Text>
            </View>
            <TextInput
              placeholder="Input Full Address"
              className="py-1"
            />
          </View>

          <View className=" w-full mt-8 flex flex-row justify-between items-center">
            <Text className="font-semibold">Due Date :</Text>
            <View className="flex-row-3 rounded-lg py-1 px-2 bg-white">
              <View>
                <TouchableOpacity onPress={showDatePicker}>
                  <TextInput
                    placeholder="DD/MM/YYYY"
                    value={formatDate(values.date)}
                    editable={false}
                    style={{ color: values.date ? "black" : "gray" }}
                  />
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
          </View>

          <View className=" w-full mt-3 flex flex-row justify-between items-center">
            <Text className="font-semibold">Status :</Text>
            <View className="bg-white w-28 h-8 rounded-lg flex flex-row justify-between items-center">
              <Text className="font-semibold ml-2">{status}</Text>
              <TouchableOpacity
                className="mx-2"
                onPress={() => {
                  setDropdown((prevVal) => !prevVal);
                }}>
                <Feather
                  name="chevron-down"
                  size={15}
                  color="#ba7e80"
                />
              </TouchableOpacity>
              {isDropdown && (
                <FlatList
                  className="absolute top-10 left-0 bg-white w-full rounded-md p-2"
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

              {/* <View className="flex flex-col absolute top-12 rounded-md left-0 bg-white w-full px-2 gap-y-2">
                <Text className="border-b-2 border-gray">Ongoing</Text>
                <Text>Cancelled</Text>
                <Text>Done</Text>
              </View> */}
              {/* <RNPickerSelect
                placeholder={{
                  label: "Select Status",
                  value: null,
                }}
                onValueChange={(value) => handleStatusChange(value)}
                items={[
                  { label: "Ongoing", value: "ongoing" },
                  { label: "Done", value: "done" },
                  { label: "Cancelled", value: "cancelled" },
                ]}
              /> */}
            </View>
          </View>

          <ColoredButton
            title={"Next"}
            styleButton={"bg-old-rose w-full my-4 py-5 mt-48 rounded-2xl"}
            styleText={"text-white"}
            onPress={() => navigation.navigate("empty-cart")}
          />
        </View>
      </SafeAreaView>
    </MeansuringTemplate>
  );
}
