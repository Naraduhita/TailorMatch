import * as React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/contexts/AuthContext";
import { CameraProvider } from "./src/contexts/CameraContext";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CameraProvider>
          <StackNavigator />
        </CameraProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
