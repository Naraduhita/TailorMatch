import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import GetStarted from "../screens/auth/GetStarted";
import Deliver from "../screens/order/Deliver";
import TrackOrder from "../screens/order/TrackOrder";
import Sewing from "../screens/order/Sewing";
import Thread from "../screens/home/Thread";
import Chat from "../screens/Chat";
import Measuring from "../screens/order/Meansuring";
import DetailChat from "../screens/chat/DetailChat";
import { useAuthContext } from "../contexts/AuthContext";
import React, { useState, lazy, useEffect } from 'react';

const RootStack = createNativeStackNavigator();

function StackNavigator() {
  const auth = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstScreen, setFirstScreen] = useState('');

  useEffect(() => {
    const checkUserToken = async () => {
      const user_token = await auth.CheckToken();
      console.log('user_token', user_token);
      if (user_token != null) {
        setIsLoggedIn(true);
        setFirstScreen('main');
      } else {
        setIsLoggedIn(false);
        setFirstScreen('get-sarted');
      }
    };

    checkUserToken();
  }, []);

  return (
    <RootStack.Navigator initialRouteName={`${firstScreen}`}>
      {/* <RootStack.Navigator initialRouteName='get-started'> */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="main"
          component={TabNavigator}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="get-started"
          component={GetStarted}
        />
        <RootStack.Screen
          name="register"
          component={Register}
        />
        <RootStack.Screen
          name="login"
          component={Login}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="measuring"
          component={Measuring}
        />
        <RootStack.Screen
          name="deliver"
          component={Deliver}
        />
        <RootStack.Screen
          name="sewing"
          component={Sewing}
        />
        <RootStack.Screen
          name="track-order"
          component={TrackOrder}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="detail-tailor"
          component={Thread}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="chat-tailor"
          component={Chat}
        />
        <RootStack.Screen
          name="detail-chat"
          component={DetailChat}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default StackNavigator;
