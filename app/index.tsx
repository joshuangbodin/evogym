import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadingTransition } from "react-native-reanimated"

import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { pink, text } from "@/constants/colors";

const Index = () => {
  const [active , setActive] = useState(1)
  const router = useRouter()


  setTimeout(()=>{active==1&&setActive(2)} , 3000)

  return (
    <View style={[style.container]}>
      <View  style={style.slidecont}>
        <View  style={[style.slide,{opacity:active == 1 ?1:0} , {justifyContent:"center" , alignItems:"center"}]}>
          <View style={[style.designelement , {width:300, height:300 , backgroundColor:"rgba(255,255,255,.4)"}]}>
            <View style={[style.designelement , {width:250, height:250 , backgroundColor:"rgba(255,255,255,.7)"}]}>
            <View style={style.designelement}>
          <Image
            style={style.image}
            source={require("../assets/images/Logo.png")}
          />
        </View>
            </View>
          </View>
          
        </View>
        <View style={[style.slide,{opacity:active == 2 ? 1:0}]}>
         <Image style={style.image2} source={require("../assets/images/j.png")}/>
         <View style={style.info}>
         <Image
            source={require("../assets/images/Logo.png")}
            style = {style.logo}
          />
          <Text style={style.motto}>LifeStyle | Health | Wellbeing</Text>

          <Text style={style.welcomeText }>Your Health is Our utmost Priority.</Text>
         </View>
          <Image style={{position:"absolute" , width:"100%" , zIndex:80 , height: 30, }}  source={require("../assets/images/bottom.png")}/>
        </View>
        <View style={[style.slide,{opacity:active == 3 ? 1:0}]}>
        <Image style={[style.image2 ]} source={require("../assets/images/HomePageGraphic.png")}></Image>
        <View style={style.info1}>
          <View style={style.topdesign}></View>
         <Image
            source={require("../assets/images/Logo.png")}
            style = {style.logo}
          />
          <Text style={style.motto}>Your Pocket Friendly Gym Application</Text>

          <Text style={[style.welcomeText, {color:'#fff'}]}>Portable And Reliable.</Text>
         
         </View>
        </View>
      </View>
      {active!=1&&<View  style={style.bottomnav}>
          <Pressable style={style.arrow} onPress={()=>{active>1 ?setActive(active-1): setActive(1)}}>
            <FontAwesome size={20} color={"darkred"} name="arrow-left" />
          </Pressable>
          <View style={style.buttoncont}>
            <View style={[style.button,{backgroundColor: active==1?"darkred":"white"}]}></View>
            <View style={[style.button,{backgroundColor: active==2?"darkred":"white"}]}></View>
            <View style={[style.button,{backgroundColor: active==3?"darkred":"white"}]}></View>
          </View>
          <Pressable style={[style.arrow,{width: active==3?100:50}]} onPress={()=>{active<3 ?setActive(active+1): router.push("(tabs)/home")} }>
            {
            active!==3 ?<FontAwesome size={20} color={"darkred"} name="arrow-right" />:  <Text style={style.motto}>Start</Text>
            
            }
          </Pressable>
        </View>}
    </View>
  );
};

const style = StyleSheet.create({
  //conainer styles
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: pink(3,1),
    position: "relative",
  },
  //slides
  slidecont: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  slide:{
    position:"absolute",
    width:"100%",
    height:"100%",
  },
//1st slide
  image: {
    objectFit: "cover",
  },
  designelement: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
  //navigation
  bottomnav:{
    position:"absolute",
    bottom:0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height: 100,
    width : "100%",
    paddingHorizontal: 40,

  },
  arrow:{
    width:50,
    height:50,
    backgroundColor:"white",
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center"
  },
  buttoncont:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:5,

  }
  ,
  button:{
    width:10,
    height:10,
    backgroundColor: "white",
    borderRadius:20,
  },
  //2nd slide
  image2:{
    position:"absolute",
    top:0,
    width:"100%",
    height:"100%",

  },
  info:{
    position:"absolute",
    height:"40%",
    width:"100%",
    backgroundColor: text.white1,
    bottom:0,
    alignItems:"center",
    padding:50,
    gap:5,
  },
  gradient:{
    width:"100%"
  }
  ,
  motto:{
    fontWeight:"bold",
    color: "darkred",
    marginVertical:"2%",
    fontSize:15,
    textAlign:"center"
  },
  logo:{
    marginVertical:"2%",
  },
  welcomeText:{
    fontSize:13,
    color: text.simpletext,
    fontWeight:"bold",
     textAlign:"center"
  },
  //3rd slide
  info1:{
    position:"absolute",
    height:"40%",
    width:"100%",
    backgroundColor: "#fff",
    bottom:0,
    alignItems:"center",
    padding:50,
    gap:5,
  },
  topdesign:{
    position:"absolute",
    backgroundColor:"#fff",
    width:"150%",
    height:50,
    top:-20,
    transform:"rotate(5deg)"
  }
});

export default Index;
