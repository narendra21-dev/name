import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Stack } from 'expo-router'

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
      {
        isLogin ? (<Redirect href={"/(main)"} />) : (<Redirect href={"/(auth)"} />)
      }
    </>

  );
};

export default RootLayout