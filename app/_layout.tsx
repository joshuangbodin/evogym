
import React from "react";
import { Stack } from "expo-router";
import { pink } from "@/constants/colors";

const _layout = () => {
  return (
    
    <Stack
      screenOptions={{
        statusBarColor: "rgba(10,10,10,1)",
        statusBarStyle:'inverted',
       
       
        
      }}
    >
      
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="calc"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
        
      />
      <Stack.Screen
        name="excercise"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="recipepage"
        options={{
          headerShown: false,
          customAnimationOnGesture:true
        }}
      />
       <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
          statusBarStyle:'dark'
        }}
      />
    </Stack>
    
  );
};

export default _layout;
