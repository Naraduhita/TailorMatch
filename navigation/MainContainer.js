import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from './screens/HomeScreen';
import Chat from './screens/Chat';
import History from './screens/History';
import Profile from './screens/Profile';

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
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === chatFitur) {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (rn === historyFitur) {
              iconName = focused ? 'time' : 'time-outline';
            } else if (rn === profileFitur) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: '#fca5a5',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={chatFitur} component={Chat} />
        <Tab.Screen name={historyFitur} component={History} />
        <Tab.Screen name={profileFitur} component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
