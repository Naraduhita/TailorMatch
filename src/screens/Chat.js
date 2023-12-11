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

  return (
    <Background>
      <View className="flex flex-col items-start justify-start w-full h-full px-4">
        <View
          id="search"
          className="flex-row self-center justify-around w-full py-1.5 bg-white rounded-full">
          <Ionicons
            name="ios-search-outline"
            size={23}
            color="grey"
            className="w-1/5"
          />
          <TextInput
            className="w-4/5"
            value={search}
            onChangeText={handleSearch}
            placeholder="Search In Chats..."
          />
        </View>

        <View className="flex-row w-full my-2">
          <Text className="text-sm">All Messages</Text>
        </View>

        <FlatList
          className="w-full"
          data={filteredUsers}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("detail-chat", {
                  username: item.userName,
                })
              }
              className="flex items-center w-full">
              <View className="flex-row items-center w-full">
                <Image
                  source={item.userImg}
                  resizeMode="contain"
                  className="border-2 border-white rounded-full w-14 h-14"
                />
                <View className="flex mx-2 my-2 mr-16">
                  <Text className="text-lg font-semibold">{item.userName}</Text>
                  <Text className="text-grayText">{item.messageText}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View className="my-2 border-b-2 border-b-emperor" />
          )}
        />
      </View>
    </Background>
  );
}
