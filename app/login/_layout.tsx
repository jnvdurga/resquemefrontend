import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
      <Stack
       screenOptions={{
        headerStyle:{
          backgroundColor:"skyblue"
        },
        headerTintColor:"white",
        headerTitleStyle:{
          fontWeight:"bold"
        }
       }}
      >

        <Stack.Screen name="index"  />
        <Stack.Screen name="login" options={{title:"Register"}} />
      </Stack>
  )
}

export default RootLayout