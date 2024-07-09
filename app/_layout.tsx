
import React from "react";
import { Stack } from "expo-router";
import { pink } from "@/constants/colors";

const _layout = () => {
  return (
    
    <Stack
      screenOptions={{
        statusBarColor: pink(3, 1),
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
    </Stack>
    
  );
};

export default _layout;
