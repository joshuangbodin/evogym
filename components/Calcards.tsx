import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
//color providers
import { randcol } from "@/constants/colors";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import { View, Text, Pressable } from "react-native";
import { style } from "@/app/(tabs)/home";

interface calcProps {
  title: string;
  description: string;
  iconname?: any;
}
const CalcCard = ({ title, description, iconname }: calcProps) => {
  return (
    <Animated.View entering={FadeInDown} style={style.calccard}>
      <View style={[style.iconcont2, { backgroundColor: randcol() }]}>
        <MaterialCommunityIcons
          name={iconname ? iconname : "weight-lifter"}
          size={20}
          color={"#fff"}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={style.excercisename}>{title}</Text>
        <Text style={style.excecisebody}>
          {description?.length > 35
            ? description?.slice(0, 34) + "..."
            : description}
        </Text>
      </View>
      <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
        <Feather name="chevron-right" size={25}>
          {" "}
        </Feather>
      </Pressable>
    </Animated.View>
  );
};

export default CalcCard;
