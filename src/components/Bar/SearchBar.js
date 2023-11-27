import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    onSearch(query);
  };

  return (
    <View className="flex-row items-center bg-[#ffff] rounded p-1 mt-4">
      <TouchableOpacity
        className="px-2"
        onPress={handleSearch}>
        <Ionicons
          name="search"
          size={24}
          color="#ba7e80"
        />
      </TouchableOpacity>
      <TextInput
        className="flex-1 px-1"
        placeholder="Find the nearest Tailor"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
    </View>
  );
};

export default SearchBar;
