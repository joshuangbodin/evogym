import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { pink, text } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { router, useRouter } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";


//Exercise Card
interface excerciseProps {
  name1: string;
  name2: string;
  noOfExcercise: number;
  rating?: number;
  image: any;
  color?:string;
  index:number;
}



const Discover = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;

  return (
    <View style={[style.container, { paddingTop }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.top}>
        <View>
          <Text style={style.header}>Discover</Text>
        </View>
        <Pressable onPress={()=> router.push('setting')}>
          <Ionicons name="settings-outline" size={25} />
        </Pressable>
      </View>
      <View>
        <View style={[style.top, { marginTop: 25 }]}>
          <Text style={style.topic}>Popular Excercises </Text>
          <Pressable style={style.seemore}>
            <Text style={style.seemoretext}>See More</Text>
            <MaterialCommunityIcons
              name="arrow-right"
              color={"gray"}
              size={15}
            />
          </Pressable>
        </View>
        <ExcerciseList />
      </View>
      <View>
      <View style={[style.top, { marginTop: 25 }]}>
          <Text style={style.topic}>Our Collection </Text>
          
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{gap:10, paddingTop:20}}>
          <ExcerciseCard2 index={1} image={require("../../assets/images/hand.png")} name1="Hand & Shoulder" name2="excercises" noOfExcercise={12}   color="skyblue" />
          <ExcerciseCard2 index={2} image={require("../../assets/images/back.png")} name1="Hand & Shoulder" name2="excercises" noOfExcercise={12} color={pink(3,1)} />
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
};

//excercise List
const ExcerciseList = () => {
  return (
    
    <ScrollView horizontal contentContainerStyle={{gap:10, paddingVertical:20}} showsHorizontalScrollIndicator={false}>
      <ExcerciseCard
      index={1}
        image={require("../../assets/images/home Workout.png")}
        name1="Home"
        name2="Workout"
        noOfExcercise={12}
        color="gray"
        rating={4.5}
      />
       <ExcerciseCard
       index={2}
        image={require("../../assets/images/chest.png")}
        name1="Chest"
        name2="Excercise"
        noOfExcercise={12}
        rating={4.5}
      />
      <ExcerciseCard
      index={3}
        image={require("../../assets/images/back.png")}
        name1="Back"
        name2="Excercise"
        color="green"
        noOfExcercise={12}
        rating={4.5}
      />
    </ScrollView>
  );
};

//excercise card
const ExcerciseCard = ({
  name1,
  name2,
  noOfExcercise,
  rating,
  image,
  color,
  index
}: excerciseProps) => {
  const router = useRouter()
  return (
    <Animated.View entering={FadeInRight.duration((index+1)*200).delay(500).damping(14).springify()}>
    <Pressable onPress={() =>{router.push('excercise')}}>
    <View style={[style.excerciseCard, {backgroundColor:color? color : "darkred"}]}>
      <View style={style.excerciseLeft}>
        <View style={style.excerciseName}>
          <Text style={style.excerciseName1}>{name1}</Text>
          <Text style={style.excerciseName1}>{name2}</Text>
        </View>

        <Text style={style.excerciseNo}>{noOfExcercise} Excercise</Text>
        <View style={style.excerciseRating}>
          <View style={style.star}>
            <MaterialCommunityIcons name="star" size={20} color={"gold"} />
          </View>
          <Text style={style.rating}>{rating}</Text>
        </View>
        <View style={style.design}></View>
      </View>
      <Image style={style.excerciseImage} source={image}></Image>
    </View>
    </Pressable></Animated.View>
  );
};

//excercisecard2
const ExcerciseCard2 = ({
  name1,
  name2,
  noOfExcercise,
  image,
  color
}: excerciseProps) => {
  return (
    <Pressable>
    <View style={[style.excerciseCard2, {backgroundColor:color? color : "darkred" }]}>
      <View style={style.excerciseLeft}>
        <View style={style.excerciseName}>
          <Text style={style.excerciseName2}>{name1}</Text>
          <Text style={style.excerciseName2}>{name2}</Text>
        </View>

        
        <View style={style.excerciseRating}>
          <View style={[style.star ]}>
            <MaterialCommunityIcons name="weight-lifter" size={20} color={"rgb("} />
          </View>
          <Text style={[style.excerciseNo ]}>{noOfExcercise} Excercise</Text>
        </View>
        <View style={style.design}></View>
      </View>
      <Image style={[style.excerciseImage,{top:-50}]} source={image}></Image>
    </View></Pressable>
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
    fontSize: 22,
    fontWeight: "bold",
  },
  setting: {},

  //popular Excercises
  topic: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seemore: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  seemoretext: {
    fontSize: 12,
    color: "gray",
  },

  //excerciseCard
  excerciseCard: {
    width: 250,
    height: 200,
    overflow: "hidden",
    backgroundColor: "darkred",
    borderRadius: 20,
    flexDirection: "row",
    position: "relative",
  },
  excerciseLeft: {
    position: "relative",
    width: "100%",
    padding: 20,
    gap: 20,
  },
  excerciseName: {},
  excerciseName1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  excerciseNo: {
    color: "#fff",
  },
  excerciseRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  excerciseImage: {
    width: 400,
    height: 250,
    position: "absolute",
    zIndex: -12,
    right: -150,
  },
  rating: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  star: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,.8)",
    borderRadius: 10,
  },
  design: {
    width: 250,
    height: 200,
    position: "absolute",
    backgroundColor: "rgba(50,50,50,.2)",
    zIndex: -13,
    borderRadius: 200,
    left: -30,
    bottom: -100,
  },
  //excercise card 2
  excerciseCard2:{
    width: "100%",
    height: 130,
    overflow: "hidden",
    backgroundColor: "darkred",
    borderRadius: 20,
    flexDirection: "row",
    position: "relative",

  },
  excerciseName2:{
    fontSize:18,
    fontWeight:"bold",
    color:'#fff'
  }
});
export default Discover;
