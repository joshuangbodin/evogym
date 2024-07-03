import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Tabbar from "@/components/Tabbar";
import { pink } from "@/constants/colors";
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderWidth: 0, padding: 8, height: 70 },
        tabBarActiveTintColor: pink(3, 1),
      }
   }
      
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Feather name="home" size={25} color={color} />,
        }}
        
      ></Tabs.Screen>
       <Tabs.Screen
        name="discover"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Feather name="compass" size={25} color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="healthdrinks"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-outline" size={25} color={color} />,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
