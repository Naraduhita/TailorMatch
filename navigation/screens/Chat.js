import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Chat({ navigation }) {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-green-500 font-bold"
                onPress={() => navigation.navigate('Chat')}>Chat</Text>
        <StatusBar style='auto'/>
        </View>
    );
  }