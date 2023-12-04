import React, { useState, useEffect, useRef, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <View className="flex-1 justify-end">
        <View className="flex-row items-center mx-1 my-3 gap-x-1">
          <TouchableOpacity>
            <Icon
              name="paperclip"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder="Type Something..."
            className="flex-1 border rounded-full p-2"
            onChangeText={() => {}}
          />
          <TouchableOpacity>
            <Icon
              name="send"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="camera"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
