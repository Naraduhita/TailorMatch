import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";

export default function PageChat({ navigation }) {
  const [messages, setMessages] = useState([]);

  return (
    <View>
      <Text>Personal Chat</Text>
    </View>
  );
}
