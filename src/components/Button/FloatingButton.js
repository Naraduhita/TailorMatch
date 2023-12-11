import React, { useState } from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FloatingButton = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (route) => {
    setModalVisible(false);
    navigation.navigate(route);
  };

  return (
    <View className="">
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View className="items-center justify-center rounded-full bg-maroon w-14 h-14">
          <Feather
            name="plus"
            size={30}
            color="white"
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{ flex: 1, backgroundColor: "black" }}
          className="opacity-80">
          <View className="items-end justify-end mb-4 top-[550px] right-[104px]">
            <View className="bg-old-rose p-2 w-[160px] items-center rounded-xl">
              <TouchableOpacity onPress={() => handlePress("in-order")}>
                <Text className="mb-1 text-base font-semibold text-white ">
                  Add Order
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress("add-collection")}>
                <Text className="mb-1 text-base font-semibold text-white ">
                  Create Tailor
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-base font-semibold text-black ">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FloatingButton;
