import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailChat({ navigation }) {
  const [messages, setMessages] = useState([]);

  return (
    <View>
      <Text>Personal Chat</Text>
    </View>
  );
}
