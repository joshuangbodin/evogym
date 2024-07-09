//imports -------------------------------------------------------------------
//component import
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
//safe area hooks
import { useSafeAreaInsets } from "react-native-safe-area-context";
//circular progress bar

//icon providers
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
//color providers
import { pink, text } from "@/constants/colors";

import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import ProgressCard from "@/components/progresscard";
import ExcerciseList from "@/components/excercise";
import CaloryCount from "@/components/calorycount";
import CalcCard from "@/components/Calcards";
import { getImgByName } from "@/data/avatars";
//db

const home = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const paddingTop = top !== 0 ? top + 10 : top + 30;
  var name3;

  //user info
  const [name1, setName1] = useState<string>("user");
  const [avatar, setAvatar] = useState<string>("white");


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
  }, []);

  return (
    <View style={[style.container, { paddingTop: paddingTop, gap: 10 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.top}>
          <View style={style.profile}>
          <Image  style={style.profileimg} source={getImgByName(avatar)}></Image>
          <View>
            <Text style={style.greeting}>Welcome Back</Text>
            <Text style={style.motto}>{name1}!<FontAwesome size={15} color={'red'} style={{fontWeight:'bold' , paddingLeft:5}} name='hand-peace-o'/></Text>
          </View></View>
          <Pressable onPress={()=> router.push('setting')} style={style.settings}>
            <Ionicons name="settings-outline" size={25} />
          </Pressable>
        </View>
        <View>
          <ProgressCard
            title="Workout Progress"
            exerciseremaining={12}
            percentage={65}
          ></ProgressCard>
        </View>
        <View>
          <View style={[style.top, { marginTop: 25 }]}>
            <Text style={style.topic}>Today's Activity </Text>
            <Pressable>
              <MaterialCommunityIcons
                name="pencil-plus-outline"
                color={"gray"}
                size={22}
              />
            </Pressable>
          </View>
          <View style={style.activitycont}>
            <CaloryCount calories={348}></CaloryCount>
            <ExcerciseList></ExcerciseList>
          </View>
        </View>
        <View>
          <View style={[style.top, { marginTop: 35 }]}>
            <Text style={style.topic}>Body Health Calculations </Text>
          </View>
          <View style={style.calccontainer}>
            <Pressable
              onPress={() => {
                router.push({ pathname: "calc", params: { name: "bmi" } });
              }}
            >
              <CalcCard
                title="Body Mass Index (BMI)"
                description="calculate your Body Mass Index, and Determine if your BMI is Normal "
              />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push({ pathname: "calc", params: { name: "ibw" } });
              }}
            >
              <CalcCard
                iconname={"dumbbell"}
                title="Ideal Body Weight"
                description="calculate your Body Mass Index, and Determine if"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//styles
export const style = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: text.white,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom:5,
  },
  logo: {
    height: 20,
    width: 100,
    objectFit: "cover",
    marginBottom: 5,
  },
  motto: {
    fontSize: 15,
    fontWeight: "bold",
    justifyContent:"center",
    alignItems:'center'
  },
  profile:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },
  profileimg:{
    height:40,
    width:40,
    backgroundColor:'gray',
    borderRadius:100,
  }
  ,
  greeting:{
    color:'gray',
    fontSize:12
  },
  settings: {},
  //progress card1
  pcard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 200,
    backgroundColor: "black",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  info: {},
  exercise: {
    color: "gray",
    paddingVertical: 4,
  },
  ptitle: {
    color: text.white1,
    fontSize: 16,
  },
  //todays activities
  topic: {
    fontSize: 18,
    fontWeight: "bold",
  },
  //calory bar
  calorybar: {
    height: 200,
    overflow: "hidden",
    maxWidth: "25%",
    backgroundColor: pink(3, 1),
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    borderCurve: "continuous",
    gap: 10,
    position: "relative",
  },
  iconcont: {
    width: "95%",
    height: 30,
    backgroundColor: "rgba(213, 63, 88 , 1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  calorytext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  calorylabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  design: {
    width: "100%",
  },
  activitycont: {
    flexDirection: "row",
  },

  //excerciseitem
  excercisecont: {
    flex: 1,
    backgroundColor: text.white1,
    marginHorizontal: 10,
    borderRadius: 20,
    height: 200,
  },
  excerciseitem: {
    flexDirection: "row",
    width: "100%",
    height: "30%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
  },
  bullet: {
    width: 5,
    marginTop: 5,
    height: 12,
    borderRadius: 4,
  },
  excercisenum: {
    flexDirection: "row",
    gap: 2,
  },
  excercisename: {
    fontWeight: "bold",
    fontSize: 17,
  },
  excecisebody: {
    color: "gray",
    fontSize: 12,
  },

  //calccard
  calccontainer: {
    backgroundColor: "#fff",
    padding: 8,
    marginVertical: 4,
    borderRadius: 20,
    gap: 5,
  },
  calccard: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  iconcont2: {
    width: "10%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
  },
});

export default home;
