import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextInputWithLabel from "../Text/TextInputWithLabel";
import ColoredButton from "../Button/ColoredButton";
import LogoSVG from "../../../assets/logo.svg";
import EllipseSVG from "../../../assets/ellipse.svg";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext.js";

export default function Template({ isRegister }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const route = useRoute();
  let role;
  if (route.name == "register") role = route.params.role;

  const auth = useAuthContext();

  useEffect(() => {
    return () => {
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
    };
  }, []);

  const handlePress = async () => {
    try {
      if (isRegister) {
        const response = await auth.Register({
          username,
          email,
          password,
          role,
        });

        if (response.status == 201) {
          navigation.navigate("login");
        } else {
          setError(response.message);
        }
      } else {
        const response = await auth.SignIn({
          email,
          password,
        });

        if (response.status == 201) {
          navigation.navigate("main");
          console.log(response.data)
        } else {
          setError(response.message);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 w-full">
      <View className="absolute">
        <EllipseSVG />
      </View>
      <View className="flex-col items-start justify-between flex-1 my-3 mx-7 gap-y-2">
        <View className="flex flex-col gap-y-4">
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
            {error != "" && (
              <Text className="text-sm font-bold text-left">{error}</Text>
            )}
          </View>
        </View>
        <View className="flex flex-row items-center justify-center w-full mb-20 gap-x-1">
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
            <View className="flex flex-row">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("register", { role: "USER" });
                }}>
                <Text className="font-semibold underline text-old-rose">
                  Customer
                </Text>
              </TouchableOpacity>
              <Text className="font-bold">{" or "}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("register", { role: "TAILOR" });
                }}>
                <Text className="font-semibold underline text-old-rose">
                  Tailor
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
