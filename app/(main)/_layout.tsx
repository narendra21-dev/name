import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const MainStack = () => {
    return (
        <Stack>
            {/* <Stack.Screen name='index' /> */}
            <Stack.Screen name='dashborad' />
        </Stack>
    )
}

export default MainStack