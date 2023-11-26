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
import Measuring from "../screens/cart/MeansuringPajamas";
import MeasuringDaily from "../screens/cart/MeansuringDaily";
import MeansuringParty from "../screens/cart/MeansuringParty";
import ViewCart from "../screens/cart/ViewCart";
import AddItem from "../screens/cart/AddItem";
import EmpetyCart from "../screens/cart/EmpetyCart";

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
          name="doodle-thread"
          component={Thread}
        />
      </RootStack.Group>
      {/* <RootStack.Group screenOptions={{ headerShown: true }}>
        <RootStack.Screen
          name="chat-tailor"
          component={Chat}
        />
      </RootStack.Group> */}
    </RootStack.Navigator>
  );
}

export default StackNavigator;
