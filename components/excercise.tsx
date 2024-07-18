//imports -------------------------------------------------------------------
//component import
import { View, Text,ScrollView } from "react-native";
//safe area hooks

//icon providers

//color providers
import { randcol } from "@/constants/colors";
import Animated from "react-native-reanimated";
import { style } from "./style";





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

export default ExcerciseList