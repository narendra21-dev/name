import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthStack = () => {
    return (
    
        <>
        {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
                {/* <Stack.Screen name='login' /> */}
                {/* <Stack.Screen name='signup' /> */}
            </Stack>
            </>

    )
}

export default AuthStack