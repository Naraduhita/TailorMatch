import * as React from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/contexts/AuthContext";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
