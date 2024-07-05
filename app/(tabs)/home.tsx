//imports -------------------------------------------------------------------
//component import
import { View, Text, StyleSheet, Image, Pressable , ScrollView } from "react-native";
//safe area hooks
import { useSafeAreaInsets } from "react-native-safe-area-context";
//circular progress bar
import CircularProgress from "react-native-circular-progress-indicator";
//icon providers
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
//color providers
import { pink, randcol, text } from "@/constants/colors";
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";
//db






//database manipulation








//props-----------------------------------------------------------------------
//progress card props
interface progProps {
  title?: string;
  exerciseremaining?: number;
  percentage?: number;
}

//calory bar props
interface CaProps {
  calories: number;
}
//excercisebar props
//bodycalcProps
interface calcProps {
  title: string;
  description: string;
  iconname?: any;
}








//child components------------------------------------------------------------------

//progress card
const ProgressCard = ({ title, exerciseremaining, percentage }: progProps) => {
  return (
    <Animated.View entering={FadeInUp} style={style.pcard}>
      <View style={style.info}>
        <Text style={style.ptitle}>{title}</Text>
        <Text style={style.exercise}>{exerciseremaining} Excercise left</Text>
      </View>
      {percentage ? (
        <CircularProgress
          activeStrokeColor={pink(3, 1)}
          value={percentage}
          radius={30}
          inActiveStrokeColor="#323232"
        />
      ) : (
        <CircularProgress
          activeStrokeColor={pink(3, 1)}
          value={0}
          radius={30}
          inActiveStrokeColor="#323232"
        />
      )}
    </Animated.View>
  );
};

//calory count
const CaloryCount = ({ calories }: CaProps) => {
  return (
    <Animated.View  style={style.calorybar}>
      <View style={style.iconcont}>
        <FontAwesome5 name="fire" color={"white"} size={25} />
      </View>
      <View >
        <Text style={style.calorytext}>{calories}</Text>
        <Text style={style.calorylabel}>Calories</Text>
      </View>
      <Image style={{position:"absolute" , bottom:-10 , zIndex:-12}} source={require("../../assets/images/Sparkles.png")}></Image>
      <View style={style.design}></View>
    </Animated.View>
  );
};

//excerciselist
const ExcerciseList = () => {
  return <Animated.View  style={style.excercisecont}>
    <ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
    <ExcerciseItem/>
    <ExcerciseItem/>
    <ExcerciseItem/>
    <ExcerciseItem/>
    <ExcerciseItem/>
    </ScrollView>
  </Animated.View>;
};

//exerxiseitem
const ExcerciseItem = () => {
  return (
    <View style={style.excerciseitem}>
      <View>
        <View style={[style.bullet , {backgroundColor: randcol()}]} ></View>
      </View>
      <View style={{flex:1 , paddingHorizontal:10 }}>
        <Text style={style.excercisename} >Push-ups</Text>
        <Text style={style.excecisebody}>Shoulders</Text>
      </View>
      <View style={style.excercisenum}>
        <Text style={style.excercisename}>12</Text>
        <Text style={style.excecisebody}>x3</Text>
      </View>
    </View>
  );
};


//Body Calc
const CalcCard = ({ title,description , iconname }: calcProps) => {
  return (
    <Animated.View entering={FadeInDown} style={style.calccard}>
      <View style={[style.iconcont2, {backgroundColor:randcol()}]}>
        <MaterialCommunityIcons name={iconname? iconname : "weight-lifter"} size={20} color={"#fff"} />
      </View>
      <View style={{flex:1 , paddingHorizontal:10 }}>
        <Text style={style.excercisename}>{title}</Text>
        <Text style={style.excecisebody}>{description?.length>35? description?.slice(0,34)+"...": description}</Text>
      </View>
      <Pressable style={{justifyContent:'center' , alignItems:"center"}}>
        <Feather name="chevron-right" size={25}> </Feather>
      </Pressable>
  
    </Animated.View>
  );
};


//Main Screen component ---------------------------------------------------




const home = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter()
  const paddingTop = top !== 0 ? top + 10 : top + 30;
  return (
    <View style={[style.container, { paddingTop: paddingTop , gap:10 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.top}>
        <View>
          <Image
            style={style.logo}
            source={require("../../assets/images/Logo.png")}
          ></Image>
          <Text style={style.motto}>LifeStyle | Health | Wellbeing</Text>
        </View>
        <Pressable style={style.settings}>
          <Ionicons name="settings-outline"  size={25} />
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
          <Text style={style.topic}>Body Health Calculations  </Text>
          </View>
          <View style={style.calccontainer}>
          <Pressable onPress={()=>{
            router.push({pathname:'calc' , params:{name:"bmi"}})
          }}><CalcCard  title="Body Mass Index (BMI)" description="calculate your Body Mass Index, and Determine if your BMI is Normal " /></Pressable>
          <Pressable onPress={()=>{
            router.push({pathname:'calc' , params:{name:"ibw"}})
          }}><CalcCard iconname={"dumbbell"}  title="Ideal Body Weight" description="calculate your Body Mass Index, and Determine if"   /></Pressable>
          </View>
        
      </View>
      </ScrollView>
    </View>
  );
};

//styles
const style = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    height: "100%",
    flex:1,
    backgroundColor:text.white,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  logo: {
    height: 20,
    width: 100,
    objectFit: "cover",
    marginBottom: 5,
  },
  motto: {
    fontSize: 12,
    fontWeight: "bold",
  },
  settings: {},
  //progress card1
  pcard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight:200,
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
    color:  text.white1,
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
    position:"relative"
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
    fontWeight:"bold",
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  design: {
    width: "100%",
  },
  activitycont: {
    flexDirection:"row",
    
  },

  //excerciseitem
excercisecont:{
    flex:1,
    backgroundColor: text.white1,
    marginHorizontal:10,
    borderRadius: 20,
    height:200,

},
  excerciseitem:{
    flexDirection:"row",
    width:"100%",
    height:"30%",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingVertical:5,
    alignItems:"center"
  },
  bullet:{
    
    width:5,
    marginTop: 5,
    height:12,
    borderRadius: 4,
  },
  excercisenum:{
    flexDirection:"row",
    gap:2,
  },
  excercisename:{
    fontWeight:"bold",
    fontSize:17
  },
  excecisebody:{
  color:"gray",
  fontSize:12,
  },

  //calccard
  calccontainer:{
    backgroundColor:"#fff",
    padding:8,
    marginVertical:4,
    borderRadius: 20,
    gap:5,
  },
  calccard:{
    flexDirection:"row",
    justifyContent: "space-around",
    paddingVertical:10,
  },
  iconcont2:{
    width:'10%',
    height:40,
    alignSelf:'center',
    justifyContent:"center",
    alignItems:"center",
    padding:2,
    borderRadius: 4,
  }


});

export default home;
