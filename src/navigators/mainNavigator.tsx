import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottomTabNavigator';

const MainStack = createNativeStackNavigator();

const mainNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName="bottomTabNavigator"
            screenOptions={{
                headerShown: false,
            }}>
            <MainStack.Screen name="bottomTabNavigator" component={BottomTabNavigator} />
            {/* other detailed screens... */}
        </MainStack.Navigator>
    )
}

export default mainNavigator