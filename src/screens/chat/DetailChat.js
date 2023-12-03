import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble, Image } from "react-native-gifted-chat";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetailChat({ navigation }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello there",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const route = useRoute();
  let username = route.params.username;

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View className="flex-row items-center justify-end h-10 bg-white rounded-full">
          <FontAwesome
            name="send"
            size={20}
          />
          <View className="mx-2">
            <Ionicons
              name="camera-outline"
              size={32}
              color="black"
            />
          </View>
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "white",
          },
        }}
        textStyle={{
          right: {
            color: "black",
          },
        }}
      />
    );
  };

  return (
    <Background>
      <SafeAreaView className="container flex-1">
        <View className="absolute top-0 w-full bg-white">
          <View className="flex-row items-center justify-start px-4 my-3 gap-x-3">
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color="black"
              />
            </View>
            <Text className="text-xl font-semibold">
              {username}
            </Text>
          </View>
        </View>

        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          className="h-14"
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
        />

        {/* <View className="flex-col w-full h-1/2">
          <View className="flex-col justify-center w-full h-10 bg-pink mt-72">
              <Text className="text-lg text-white rounded-2xl">Halo, silahkan pesan</Text>
          </View>
        </View> */}
      </SafeAreaView>
    </Background>
  );
}
