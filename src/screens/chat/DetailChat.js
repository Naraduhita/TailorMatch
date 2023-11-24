import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/Background";
import { Ionicons, FontAwesome, Icon } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble, Image } from "react-native-gifted-chat";

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

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View className="h-10  flex-row items-center justify-end rounded-full bg-white">
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

  // const renderMessageImage = (props) => {
  //   return (
  //   <Image {...props}>
  //     <View className="h-10 w-10 flex items-center justify-center rounded-full bg-white mr-5 mb-">
  //         <FontAwesome
  //           name="font"
  //           size={12}
  //         />
  //       </View>
  //   </Image>
  //   );
  // };

  return (
    <Background>
      <SafeAreaView className="container flex-1">
        <View className="w-full top-0 absolute bg-white h-24 ">
          <View className="flex-row items-center justify-between px-4  mt-10 ">
            <View className="flex-row items-centery">
              <Ionicons
                name="arrow-back-outline"
                size={35}
                color="black"
              />
            </View>
            <Text className="text-xl font-semibold mr-28 ">
              Username Tailor
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
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
        />

        {/* <View className="flex-col w-full h-1/2">
          <View className="flex-col bg-pink w-full justify-center h-10 mt-72">
              <Text className="text-lg text-white rounded-2xl">Halo, silahkan pesan</Text>
          </View>
        </View> */}
      </SafeAreaView>
    </Background>
  );
}
