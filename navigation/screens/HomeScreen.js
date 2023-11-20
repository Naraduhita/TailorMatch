import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function HomeScreen({ navigation }) {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-red-500 font-bold"
                onPress={() => alert('This is the "Home" screen.')} >Home Screen</Text>
            <StatusBar style='auto'/>
        </View>
    );
}