import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import GetStarted from "../screens/auth/GetStarted";
import Deliver from "../screens/order/Deliver";
import TrackOrder from "../screens/order/TrackOrder";
import Sewing from "../screens/order/Sewing";
import Thread from "../screens/home/Thread";
// import Chat from "../screens/Chat";
// import Measuring from "../screens/order/Meansuring";
import DetailChat from "../screens/chat/DetailChat";
import { useAuthContext } from "../contexts/AuthContext";
import React, { useState, lazy, useEffect } from "react";
import Measuring from "../screens/cart/MeansuringPajamas";
import MeasuringDaily from "../screens/cart/MeansuringDaily";
import MeansuringParty from "../screens/cart/MeansuringParty";
import ViewCart from "../screens/cart/ViewCart";
import AddItem from "../screens/cart/AddItem";
import EmpetyCart from "../screens/cart/EmpetyCart";
import CreateOrder from "../screens/cart/CreateOrder";
import Chat from "../screens/Chat";
import DetailMessage from "../screens/chat/DetailMessage";
import Bills from "../screens/chat/Bills";
import Transaction from "../screens/transaction/Transaction";
import TransFailed from "../screens/transaction/TransFailed";
import TransSuccess from "../screens/transaction/TransSuccess";
import InOrder from "../screens/home-tailor/InOrder";
import OrderNum from "../screens/home-tailor/OrderNum";
// import MessagesList from "../components/chat/MessagesList";
import HomeTailor from "../screens/home-tailor/HomeTailor";
import AddCollection from "../screens/home-tailor/AddCollection";
import EditCollection from "../screens/home-tailor/EditCollection";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
  const auth = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstScreen, setFirstScreen] = useState("");

  useEffect(() => {
    const checkUserToken = async () => {
      const user_token = await auth.CheckToken();
      console.log("user_token", user_token);
      if (user_token != null) {
        setIsLoggedIn(true);
        setFirstScreen("main");
      } else {
        setIsLoggedIn(false);
        setFirstScreen("get-sarted");
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
          name="create-order-tailor"
          component={CreateOrder}
        />
        <RootStack.Screen
          name="empty-cart"
          component={EmpetyCart}
        />
        <RootStack.Screen
          name="view-cart"
          component={ViewCart}
        />
        <RootStack.Screen
          name="add-item"
          component={AddItem}
        />
        <RootStack.Screen
          name="measuring-party"
          component={MeansuringParty}
        />
        <RootStack.Screen
          name="measuring-daily"
          component={MeasuringDaily}
        />
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
          name="detail-message"
          component={DetailMessage}
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
        <RootStack.Screen
          name="bills"
          component={Bills}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="chat"
          component={Chat}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="failed"
          component={TransFailed}
        />
        <RootStack.Screen
          name="success"
          component={TransSuccess}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="transaction"
          component={Transaction}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="in-order"
          component={InOrder}
        />
        <RootStack.Screen
          name="order-num"
          component={OrderNum}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen
          name="message-list"
          component={MessagesList}
        /> */}
        <RootStack.Screen
          name="detail-tailor"
          component={Thread}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="home-tailor"
          component={HomeTailor}
        />
        <RootStack.Screen
          name="add-collection"
          component={AddCollection}
        />
        <RootStack.Screen
          name="edit-collection"
          component={EditCollection}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default StackNavigator;
