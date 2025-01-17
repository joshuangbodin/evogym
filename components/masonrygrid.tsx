import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { randcol } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

interface imgcard {
  title?: string;
  source: any;
  height?: number;
  color?: string;
  index:number,
  param:string,
}

interface Props {
  category: string;
  meals: any[]
}

const MasonryGrid = ({ category ,meals }: Props) => {
  let data = [
    {
      data: require("../assets/images/food1.png"),
      height: 250,
      title: "Healthy Salads",
    },
    {
      data: require("../assets/images/food3.png"),
      height: 250,
      title: "Healthy Salads",
    },
    {
      data: require("../assets/images/food1.png"),
      height: 400,
      title: "Healthy Salads",
    },
  ];

  let drink = [
    {
      data: require("../assets/images/food2.png"),
      height: 250,
      title: "Healthy Salads",
    },
    {
      data: require("../assets/images/drink2.png"),
      height: 250,
      title: "Healthy Salads",
    },
    {
      data: require("../assets/images/drink1.png"),
      height: 400,
      title: "Healthy Salads",
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
      }}
    >
      <View style={{ width: "100%" }}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          data={category == "foods" ? meals : drink}
          renderItem={(item ) => (
            <ImageCard
              index={item.index}
              param={item.item.idMeal}
              source={item.item.strMealThumb}
              height={200}
              title={item.item.strMeal}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MasonryGrid;

const ImageCard = ({ title, height, source,index , param }: imgcard) => {
  return (
    <Pressable onPress={()=>{
      router.push({pathname:'recipepage' , params:{
        id: index
      }} )
    }}>
    <Animated.View 
    entering={
        FadeInDown.duration(200*(index+1)).delay(1000)
    }
      style={[
        {
          height: height,
          width: "100%",
          backgroundColor: 'lightgray',
          borderRadius: 15,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
      ]}
    >
      <Image
        source={{uri:source}}
        transition={10}
        style={{ 
            width: "100%", 
            objectFit: "cover", 
            height: height 
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "rgba(40,40,40,.6)",
          bottom: -50,
          width: "100%",
          height: 120,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: 5,
        }}
      >
        <View>
          <Text style={{ 
            color: "white",
            fontSize: 22,
            fontWeight: "bold" 
            }}>
            {title}
          </Text>
        </View>
        <View style={{ 
            flexDirection: "row", 
            alignItems: "baseline", 
            gap: 5 
            }}>
          <MaterialCommunityIcons name="star" size={20} color={"gold"} />
          <Text style={{ color: "#fff", fontSize: 15 }}>4.5</Text>
        </View>
      </View>
    </Animated.View></Pressable>
  );
};
