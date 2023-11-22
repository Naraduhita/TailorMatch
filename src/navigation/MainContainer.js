import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import Chat from "../screens/Chat";
import History from "../screens/History";
import Profile from "../screens/Profile";

// Screen names
const homeName = "Home";
const chatFitur = "Chat";
const historyFitur = "History";
const profileFitur = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === chatFitur) {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (rn === historyFitur) {
              iconName = focused ? "time" : "time-outline";
            } else if (rn === profileFitur) {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#BA7E80" : "grey"}
              />
            );
          },
          tabBarActiveTintColor: "#BA7E80",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            height: 50,
            paddingBottom: 5,
          },
        })}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F2E5E5",
            },
          }}
        />
        <Tab.Screen
          name={chatFitur}
          component={Chat}
          options={{
            headerStyle: {
              backgroundColor: "#F2E5E5",
            },
          }}
        />
        <Tab.Screen
          name={historyFitur}
          component={History}
          options={{
            headerStyle: {
              backgroundColor: "#F2E5E5",
            },
          }}
        />
        <Tab.Screen
          name={profileFitur}
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: "#F2E5E5",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
