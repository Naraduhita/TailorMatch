import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function History({ navigation }) {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-black-500 font-bold"
                onPress={() => navigation.navigate('History')}>History</Text>
          <StatusBar style='auto'/>
        </View>
    );
}