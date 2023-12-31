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
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { messages } from "../components/messages";

export default function Chat({ navigation }) {
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
        navigation.navigate("detail-chat", {
          username: item.userName,
        })
      }
      className="flex items-center mx-12 mb-2">
      <View className="flex-row items-center border-b-2 border-b-gray">
        <Image
          source={item.userImg}
          resizeMode="contain"
          className="w-16 h-16 border-2 border-white rounded-full"
        />
        <View className="flex mx-2 my-2">
          <Text className="text-lg font-semibold">{item.userName}</Text>
          <Text className="text-sm">{item.messageText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Background>
      <View className="container flex-1">
        <View
          id="search"
          className="flex-wrap justify-around h-10 px-4 mb-2 bg-white rounded-full mx-7">
          <Ionicons
            name="ios-search-outline"
            size={23}
            color="grey"
          />
          <TextInput
            className="w-full h-full mx-4"
            value={search}
            onChangeText={handleSearch}
            placeholder="Search In Chats..."
          />
        </View>

        <View className="flex-row mx-12 mb-2">
          <Text className="mx-3 text-sm">All Messages</Text>
        </View>

        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Background>
  );
}
