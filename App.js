import * as React from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
