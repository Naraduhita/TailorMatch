import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";

import ChatInput from "../../components/chat/ChatInput";
import Messages from "../../components/chat/Messages";

export default function DetailMessage({ navigation }) {
  return (
    <SafeAreaView className="container flex-1">
      {/* header */}
      <View className="w-full top-0 absolute bg-white h-20">
        <View className="flex-row items-center justify-between px-8  mt-10 ">
          <TouchableOpacity onPress={() => navigation.navigate("chat")}>
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <Text className="text-lg font-semibold mx-auto">Sweetest Stitch</Text>
        </View>
      </View>

      {/* isi chat */}
      <Messages />
      <ChatInput />
    </SafeAreaView>
  );
}
