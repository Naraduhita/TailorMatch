import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import GetStarted from "../screens/auth/GetStarted";
import Deliver from "../screens/order/Deliver";
import TrackOrder from "../screens/order/TrackOrder";
import Sewing from "../screens/order/Sewing";
import DetailChat from "../screens/chat/DetailChat";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="get-started">
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
          name="detail-chat"
          component={DetailChat}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default StackNavigator;
