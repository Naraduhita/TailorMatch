import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import TextInputWithLabel from "../Text/TextInputWithLabel";
import ColoredButton from "../Button/ColoredButton";
import LogoSVG from "../../../assets/logo.svg";
import EllipseSVG from "../../../assets/ellipse.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import register from "../../api/auth/register.js";
import login from "../../api/auth/login.js";

export default function Template({ isRegister }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = async () => {
    try {
      const response = await register({
        username,
        email,
        password,
        role: "USER", // Sesuaikan role sesuai kebutuhan
      });

      // Navigasi sesuai dengan kondisi isRegister
      if (isRegister) {
        navigation.navigate("login");
      } else {
        navigation.navigate("main");
      }
    } catch (error) {
      console.error("Error:", error.message); // Tampilkan pesan kesalahan jika ada
    }
  };

  // const handlePress = () => {
  //   if (isRegister) {
  //     navigation.navigate("login");
  //   } else {
  //     navigation.navigate("main");
  //   }
  // };

  return (
    <SafeAreaView className="flex-1 w-full">
      <View className="absolute">
        <EllipseSVG />
      </View>
      <View className="flex-col items-start justify-start flex-1 my-3 mx-7 gap-y-2">
        <View className="flex flex-row items-center justify-end w-full">
          <Text className="mx-3 mt-5 text-xl font-bold text-right text-old-rose">
            TailorMatch
          </Text>
          <View className="mt-5">
            <LogoSVG
              width={40}
              height={40}
            />
          </View>
        </View>
        <View className="flex flex-col w-full gap-y-7">
          <View className="flex flex-col gap-1">
            <Text className="text-3xl font-bold">
              {isRegister ? "Register" : "Login"}
            </Text>
            <Text className="font-normal">
              {isRegister
                ? "Create new account for you"
                : "Login into your account"}
            </Text>
          </View>
          <View className="flex flex-col gap-y-2">
            {isRegister && (
              <TextInputWithLabel
                label={"Name"}
                placeholder={"John Doe"}
                value={username}
                onChange={(text) => setUsername(text)}
              />
            )}
            <TextInputWithLabel
              label={"Email"}
              placeholder={"example@gmail.com"}
              value={email}
              onChange={(text) => setEmail(text)}
            />
            <TextInputWithLabel
              label={"Password"}
              placeholder={"password"}
              isPassword={true}
              value={password}
              onChange={(text) => setPassword(text)}
            />
          </View>
          <ColoredButton
            styleButton={"bg-old-rose my-4"}
            title={isRegister ? "Register" : "Login"}
            styleText={"text-white"}
            onPress={handlePress}
          />
        </View>
        <View className="absolute flex flex-row items-center justify-center w-full bottom-20 gap-x-1">
          <Text className="font-bold">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </Text>
          {isRegister ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
              }}>
              <Text className="font-semibold underline text-old-rose">
                Login
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("register");
              }}>
              <Text className="font-semibold underline text-old-rose">
                Register
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
