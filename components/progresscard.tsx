//imports -------------------------------------------------------------------
//component import
import { View, Text , StyleSheet} from "react-native";
//safe area hooks

//circular progress bar
import CircularProgress from "react-native-circular-progress-indicator";
//icon providers

//color providers
import { pink } from "@/constants/colors";
import Animated, {  FadeInUp } from "react-native-reanimated";
import { style } from "@/app/(tabs)/home";

//db


interface progProps {
    title?: string;
    exerciseremaining?: number;
    percentage?: number;
  }

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

  export default ProgressCard