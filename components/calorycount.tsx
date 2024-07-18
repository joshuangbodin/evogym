
import { FontAwesome5 } from "@expo/vector-icons";
import { View ,Text , Image } from "react-native";
import Animated from "react-native-reanimated";
import { style } from "./style";


interface CaProps {
    calories: number;
  }

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
        <Image style={{position:"absolute" , bottom:-10 , zIndex:-12}} source={require("../assets/images/Sparkles.png")}></Image>
        <View style={style.design}></View>
      </Animated.View>
    );
  };

  export default CaloryCount