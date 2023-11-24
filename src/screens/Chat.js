import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Chat({ navigation }) {
  const messages = [
    {
      id: "1",
      userName: "Jenny Doe",
      userImg: require("../components/img/user1.jpg"),
      isOnline: false,
      messageText:
        "Hey there, this is my test for a post of my social app in React Native.",
    },
    {
      id: "2",
      userName: "John Doe",
      userImg: require("../components/img/user2.jpg"),
      isOnline: true,
      messageText:
        "Hey there, this is my test for a post of my social app in React Native.",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(messages);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = messages.filter((user) =>
      user.userName.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredUsers(filteredData);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("PageChat", {
          userName: item.userName,
        })
      }
      className=" flex items-center mx-20 mb-2 relative">
      <View className="items-center flex-row ">
        <Image
          source={item.userImg}
          resizeMode="contain"
          className="h-16 w-16 border-2 border-white rounded-full"
        />
        <View className="flex mx-2">
          <Text className="text-lg font-semibold">{item.userName}</Text>
          <Text className="text-sm">{item.messageText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Background>
      <SafeAreaView className="container flex-1">
        <View
          id="search"
          className="flex-wrap justify-around h-10 my-4  mt-2 px-20 rounded-full mx-12 bg-white">
          <Ionicons
            name="ios-search-outline"
            size={23}
            color="grey"
          />

          <TextInput
            className="w-full h-full mx-4 "
            value={search}
            onChangeText={handleSearch}
            placeholder="Search In Chats..."
          />
        </View>

        <View className="mx-12 flex-row mb-2">
          <Text className="text-sm mx-3">All Messages</Text>
        </View>

        <View className="">
          <FlatList
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}
