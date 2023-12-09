import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: "1", user: 1, text: "Halo, pesanan sudah ready ya", image: null },
  { id: "2", user: 2, text: "Baik kak, ditunggu bills nya", image: null },
  {
    id: "3",
    user: 1,
    text: "Ini billsnya ya",
    image: require("../img/bills.png"),
  },
  { id: "4", user: 2, text: "Sudah dibayar kak! Terima kasih", image: null },
];

const ChatBubble = ({ user, text, image, navigation }) => {
  const handleImageClick = () => {
    navigation.navigate("bills");
  };
  return (
    <View style={user === 1 ? styles.user1Bubble : styles.user2Bubble}>
      {image && (
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={image}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
      <Text style={user === 1 ? styles.text1 : styles.text2}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user1Bubble: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: "80%",
  },
  user2Bubble: {
    alignSelf: "flex-end",
    backgroundColor: "#BA7E80",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: "80%",
  },
  text1: {
    color: "black",
    fontSize: 16,
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  image: {
    maxWidth: "100%",
    borderRadius: 8,
    marginVertical: 4,
  },
});

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="mt-20">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble
            user={item.user}
            text={item.text}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
