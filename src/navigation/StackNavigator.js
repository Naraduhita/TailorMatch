import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import GetStarted from "../screens/auth/GetStarted";
import DetailsOrder from "../screens/history/DetailsOrder";
import History from "../screens/history/History";

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
        <RootStack.Screen
          name="detailsorder"
          component={DetailsOrder}
        />
        <RootStack.Screen
          name="historyback"
          component={History}></RootStack.Screen>
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default StackNavigator;
