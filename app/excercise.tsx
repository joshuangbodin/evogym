import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Excerciseplayer from "@/components/excerciseplayer";
import { fullbody } from "@/data/excercise";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";
import { pink } from "@/constants/colors";

const Excercise = () => {
  const [playing, setPlaying] = useState(false);

  const [timerpause, setTimerPaused] = useState(false);
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Pressable style={style.back}>
          <Feather size={25} name="chevron-left" />
        </Pressable>
        <View style={style.calories}>
          <Text style={style.calorytext}>
            126 kcal <FontAwesome6 size={15} color={"orange"} name="fire" />
          </Text>
        </View>
      </View>

      <Excerciseplayer
        name={fullbody[0].name}
        description={fullbody[0].instructions}
        image={fullbody[0].gifUrl}
      />
      {!playing ? (
        <View
          style={[
            style.timercontainer,
            { flexDirection: "row", justifyContent: "space-around" },
          ]}
        >
          <Pressable
            style={[
              style.btns,
              {
                borderColor: pink(3, 1),
                backgroundColor: "transparent",
                borderWidth: 1,
              },
            ]}
          >
            <Text  style={[style.btnstext, { color: pink(3, 1) }]}>Back</Text>
          </Pressable>
          <Pressable onPress={()=>{
              setPlaying(true)
            }} style={[style.btns, {}]}>
            <Text style={style.btnstext}>Start</Text>
          </Pressable>
        </View>
      ) : (
        <View style={style.timercontainer}>
          {/*<CountDown
            size={15}
            until={20}
            onFinish={()=>{
              setPlaying(false)
            }}
            
            digitTxtStyle={{ color: "black" }}
            timeLabelStyle={{ color: "red", fontWeight: "bold" }}
            separatorStyle={{ color: "black" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "", s: "" }}
            showSeparator
            running={timerpause}
          />*/}

          <View style={style.controlbar}>
            <Pressable style={style.btnnext}>
              <Text style={style.btntext}>Back</Text>
            </Pressable>
            <Pressable
              style={style.playbtn}
              onPress={() => setTimerPaused(!timerpause)}
            >
              <FontAwesome6
                color={"white"}
                size={20}
                name={timerpause ? "pause" : "play"}
              />
            </Pressable>
            <Pressable style={style.btnnext}>
              <Text style={style.btntext}>Next</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  back: {
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
  },
  calories: {
    backgroundColor: "#fff",
    padding: 5,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  calorytext: {
    fontWeight: "bold",
  },
  timercontainer: {
    height: 200,
    padding: 10,
    gap: 15,
    //justifyContent:'center',
    alignItems: "center",
  },
  controlbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  playbtn: {
    backgroundColor: pink(3, 1),
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  btnnext: {
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontWeight: "bold",
  },
  btns: {
    backgroundColor: pink(3, 1),
    width: "45%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnstext: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Excercise;
