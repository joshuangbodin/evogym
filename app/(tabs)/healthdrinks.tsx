import { View, Text, StyleSheet, ScrollView, Pressable  } from "react-native";

import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { pink, text } from "@/constants/colors";
import MasonryGrid from "@/components/masonrygrid";
import { router } from "expo-router";

const Healthdrinks = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;


  //active
  const [active, setActive] = useState("foods")
  return (
    <View style={[style.container, { paddingTop: paddingTop }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={style.top}>
            <View>
              <Text style={style.header}>
                Healthy Foods and{" "}
                Drinks{" "}
              </Text>
            </View>
            <Pressable onPress={()=> router.push('setting')}>
              <Ionicons name="settings-outline" size={25} />
            </Pressable>
          </View>
          <View>
            <View style={[style.top, { marginTop: 25 }]}>
              <Text style={style.topic}>Our Recipes </Text>
            </View>
            <View style={style.categorieslist}>
              <Pressable onPress={()=>{
                setActive("foods")
              }} style={[style.categories , {backgroundColor:active =="foods"?pink(1,1): "#fff"}]}>
                <View>
                  <Text style={style.categoriestext}>Foods</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>{
                setActive("drinks")
              }} style={[style.categories , {backgroundColor:active =="drinks"?pink(1,1): "#fff"}]}>
                <View >
                  <Text style={style.categoriestext}>Drinks</Text>
                </View>
              </Pressable>
            </View>
            <View>
              <MasonryGrid category={active}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: text.white,
  },
  //top
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  setting: {},
  //topinfo
  topic: {
    fontSize: 18,
    fontWeight: "bold",
  },
  //categories
  categories:{
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#fff',
    width:"50%",
    borderRadius:20,

  },
  categoriestext:{
    fontSize:16,
    fontWeight:"bold"
  },
  categorieslist:{
    flexDirection:"row",
    padding:10,
    gap:10,
  }
});
export default Healthdrinks;
