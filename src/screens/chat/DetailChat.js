import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";

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
      {
        _id: 2,
        text: "Hello there",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "React Native",
        },
        type: "image",
        image: require("../../components/img/bills.png"),
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View className="h-10 flex-row items-center justify-end rounded-full bg-white">
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

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.type === "image") {
      return (
        <TouchableOpacity onPress={() => handleImageClick(currentMessage)}>
          <View className="">
            <Image
              source={currentMessage.image}
              className="my-2"
            />
          </View>
        </TouchableOpacity>
      );
    }

    return <Bubble {...props} />;
  };

  const handleImageClick = ({ index }) => {
    navigation.navigate("bills");
  };

  return (
    <Background>
      <SafeAreaView className="container flex-1">
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
            <Text className="text-lg font-semibold mx-auto">
              Sweetest Stitch
            </Text>
          </View>
        </View>

        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          renderMessage={renderMessage}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
        />
      </SafeAreaView>
    </Background>
  );
}
