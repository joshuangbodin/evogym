import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getImgByName } from "@/data/avatars";
import { pink } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { advice, calculateBMI, calculateIBW } from "@/helpers/functionality";
import { router } from "expo-router";

interface props{
  advice:string;
  color:string|any;
}

const Profile = () => {
  const [name1, setName1] = useState<string>("user");
  const [avatar, setAvatar] = useState<string>("white");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  var name3;

  //use effect
  useEffect(() => {
    AsyncStorage.getItem("user-name")
      .then((value) => {
        if (value !== null) {
          name3 = value;
          setName1(name3);
        }
      })
      .catch((err) => console.log(err));
    AsyncStorage.getItem("user-avatar")
      .then((value) => {
        if (value !== null) {
          name3 = value;
          setAvatar(name3);
        }
      })
      .catch((err) => console.log(err));
    AsyncStorage.getItem("user-age")
      .then((res) => {
        typeof res == "string" ? setAge(res) : null;
      })
      .catch((err) => console.log(err));
    AsyncStorage.getItem("user-weight")
      .then((res) => {
        typeof res == "string" ? setWeight(res) : null;
      })
      .catch((err) => console.log(err));
    AsyncStorage.getItem("user-height")
      .then((res) => {
        typeof res == "string" ? setHeight(res) : null;
      })
      .catch((err) => console.log(err));
  }, []);

  //markup

  return (
    <View style={style.container}>
      <View style={style.imgcnt}>
        <Pressable onPress={()=>{
          router.push('home')
        }} style={style.backbtn}>
          <Feather name="chevron-left" size={25} />
        </Pressable>
        <Image style={style.image} source={getImgByName(avatar)} />
        <View style={style.imginner}>
          <View style={style.infolist}>
            <View style={style.info}>
              <Text style={style.infotext}>{age} y/o</Text>
              <Text style={style.infotitle}>age</Text>
            </View>
            <View style={style.info}>
              <Text style={style.infotext}>{weight} kg</Text>
              <Text style={style.infotitle}>weight</Text>
            </View>
            <View style={style.info}>
              <Text style={style.infotext}>{height} cm</Text>
              <Text style={style.infotitle}>height</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.bottom}>
        <View style={style.bottomtop}>
          <Text style={style.name}>{name1}</Text>
          <Pressable onPress={()=>{
            router.push('edit')
          }} style={style.edit}>
            <Text style={style.edittext}>Edit</Text>
          </Pressable>
        </View>
        
        <View style={style.list}>
          <View style={style.info}>
            <Text style={[style.infotext, { color: "black" }]}>
              {calculateBMI(Number(age), Number(height), Number(weight))}
            </Text>
            <Text style={style.infotitle}>BMI</Text>
          </View>
          <View style={style.info}>
            <Text style={[style.infotext, { color: "black" }]}>
              {calculateIBW("Male", Number(height))}
            </Text>
            <Text style={style.infotitle}>IBW</Text>
          </View>
        </View>
        <AdviceBoard color={advice(calculateBMI(Number(age), Number(height), Number(weight))).status} advice={advice(calculateBMI(Number(age), Number(height), Number(weight)))?.advice}/>
      </View>
    </View>
  );
};


const AdviceBoard = ({advice , color}:props)=>{

  const advices = advice.split(';')
  return <View style={style.body}>

    <Text style={[style.bodytext1 , {color:color}]}>{advices[0]}!</Text>
    <Text style={style.bodytext2}>{advices[1]}</Text>

  </View>
}

//styles
const style = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  bottom: {
    width: "100%",
    height: "55%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -100,
    borderRadius: 30,
    padding: 10,
  },

  //imgcnt
  imgcnt: {
    width: "100%",
    height: "65%",
    position: "relative",
  },
  imginner: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(10,10,10,.8)",
  },
  //bottom
  bottomtop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  edit: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderColor: pink(3, 1),
    borderWidth: 3,
    borderRadius: 40,
    height: 45,
  },
  edittext: {
    fontWeight: "bold",
    color: pink(3, 1),
  },
  //infolist
  infolist: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'flex-start',
    padding:15,
    position: "absolute",
    bottom: 0,
    //alignItems:'center',
    width: "100%", 
    height: "30%",
    backgroundColor: "rgba(10,10,10,.5)",
    borderRadius: 30,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  infotext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  infotitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "darkgray",
  },
  //backbtn
  backbtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 88,
    backgroundColor: "#fff",
    borderRadius: 30,
    top: 10,
    left: 10,
  },

  //list
  list: {
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
    flexDirection: "row",
    height: "30%",
  },

  //advicebody
  body:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:0,
    padding:20,
    gap:10
  },
  bodytext1:{

    color:'white',
    backgroundColor:'rgb(220,220,220)',
    fontSize:15,
    fontWeight:'bold',
    padding:7,
    borderRadius:20,
    width:'100%',
    textAlign:'center'

  },
  bodytext2:{
     textAlign:'center',
     fontSize:15,
     padding:10
  }

});

export default Profile;
