import { View, Text, Switch, StyleSheet, Settings, Pressable , Image, Alert } from "react-native";
import React, { useState } from "react";
import {
  Feather,
  
  FontAwesome6,
  Fontisto,
} from "@expo/vector-icons";
import { pink } from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";


interface itemprops{
    name:string,
    icon:any,
    presshandler : ()=>void
}

const Setting = () => {
  
  const deleteProfile = ()=>{
    Alert.alert('Are you sure' , 'Your Account will be permanently deleted',[
      {
        text:'Proceed',
        onPress:()=>{
          AsyncStorage.clear()
          router.push('/')
        },
        
      },
      {
        text:'No Thanks',
        onPress:()=>{}
      }

    ],

  )
    
  }

  const editprofile =()=>{
    router.push('edit')
  }
 
  return <View>
    <Image></Image>
    <View>
        <Item name="Delete Profile" presshandler={deleteProfile} icon={'trash-can'}/>
        <Item  presshandler={editprofile} name="Edit Profile" icon={'pencil'}/>
    </View>
  </View>;
};

const Item  = ({name , icon , presshandler}:itemprops) => {
  return (
    <Pressable onPress={presshandler} >
    <View style={style.itemContainer}>
        
      <View style={style.settingsitem}>
        <FontAwesome6 name={icon} size={20} />
        <Text>{name}</Text>
        <Feather name="chevron-down" color={'gray'} size={20} />
      </View>
      
    </View></Pressable>
  );
};

export default Setting;

const style = StyleSheet.create({
  container: {},
  settingsitem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  itemContainer: {},
});
