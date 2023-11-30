import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const Message = ({ time, isLeft, message, navigation }) => {
  const isOnLeft = (type) => {
    if (isLeft && type === "messageContainer") {
      return {
        alignSelf: "flex-start",
        backgroundColor: "#BA7E80",
      };
    } else if (isLeft && type === "message") {
      return {
        color: "white",
      };
    } else if (isLeft && type === "time") {
      return {
        color: "white",
      };
    } else {
      return {
        alignSelf: "flex-end", // Align user 1 messages to the right
      };
    }
  };

  const [containerWidth, setContainerWidth] = useState(null);
  const isImage = typeof message === "string" && message.startsWith("image:");

  useEffect(() => {
    // Calculate the width of the message container based on the message length
    const screenWidth = Dimensions.get("window").width;
    const maxContainerWidth = 0.8 * screenWidth;
    const calculatedWidth = Math.min(
      maxContainerWidth,
      message.length * (isImage ? 26 : 30),
    );
    setContainerWidth(calculatedWidth);
  }, [message, isImage]);

  const handleImageClick = () => {
    // Extracting the image URL from the "image:" prefix
    const imageUrl = message.replace("image:", "");
    // Navigating to the "bills" page with the image URL as a parameter
    navigation.navigate("bills", { imageUrl });
  };

  return (
    <View className="flex-1 container">
      <View className="p-2">
        <TouchableOpacity onPress={isImage ? handleImageClick : null}>
          <View
            className="flex-col border rounded-2xl px-5 py-2 items-start "
            style={[isOnLeft("messageContainer"), { width: containerWidth }]}>
            {isImage ? (
              <Image
                source={require("../img/bills.png")}
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <View>
                <Text
                  className="text-black"
                  style={[isOnLeft("message")]}>
                  {message}
                </Text>
              </View>
            )}
            <View style={styles.timeView}>
              <Text
                className="text-xs text-black"
                style={[isOnLeft("time")]}>
                {time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MessagesList = ({ onSwipeToReply, navigation }) => {
  const [messages, setMessages] = useState([
    // Your message data here
    {
      user: 0,
      time: "12:00",
      content: "Hey",
    },
    {
      user: 1,
      time: "12:05",
      content: "What's up hellnretsutgoaheguo",
    },
    {
      user: 1,
      time: "12:07",
      content: "image:https://example.com/image.jpg",
    },
    {
      user: 0,
      time: "12:09",
      content: "things are going great ",
    },
  ]);

  const user = useRef(0);

  return (
    <ScrollView
      className="mt-20 p-4"
      ref={(ref) => (ScrollView.current = ref)}
      onContentSizeChange={() => {
        ScrollView.current.scrollToEnd({ animated: true });
      }}>
      {messages.map((message, index) => (
        <Message
          key={index}
          time={message.time}
          isLeft={message.user !== user.current}
          message={message.content}
          navigation={navigation} // Make sure you are passing the navigation prop
          onSwipe={onSwipeToReply}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeView: {
    // Define your timeView styles if needed
  },
});

export default MessagesList;
