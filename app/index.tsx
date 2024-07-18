import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";

//import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { pink, text } from "@/constants/colors";

const Index = () => {
  const [active, setActive] = useState(1);
  const router = useRouter();

  setTimeout(() => {
    active == 1 && setActive(2);
  }, 3000);

  return (
    <View style={[style.container]}>
      <Pressable
        onPress={() => {
          router.push("login");
        }}
        style={style.skipctn}
      >
        <View style={style.skip}>
          <Text style={style.skiptext}>Skip</Text>
        </View>
      </Pressable>
      <View style={style.slidecont}>
        <View
          style={[
            style.slide,
            { opacity: active == 1 ? 1 : 0 },
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View
            style={[
              style.designelement,
              {
                width: 300,
                height: 300,
                backgroundColor: pink(3,1),
              },
            ]}
          >
            <View
              style={[
                style.designelement,
                {
                  width: 250,
                  height: 250,
                  backgroundColor: pink(2,1),
                },
              ]}
            >
              <View style={style.designelement}>
                <Text style={style.logo}>PULSE GYM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[style.slide, { opacity: active == 2 ? 1 : 0 }]}>
          <Image
            style={[style.image2 , {width:300 , height:300}]}
            source={require("../assets/images/splashimage1.png")}
          />
          <View style={style.info}>
            <Text style={style.logo}>PULSE GYM</Text>
            <Text style={style.motto}>LifeStyle | Health | Wellbeing</Text>

            <Text style={style.welcomeText}>
              Your Health is Our utmost Priority.
            </Text>
          </View>
        </View>
        <View style={[style.slide, { opacity: active == 3 ? 1 : 0 }]}>
          <Image
            style={[
              style.image2
            ]}
            source={require("../assets/images/splashimage2.png")}
          ></Image>
          <View style={style.info}>
            <Text style={style.logo}>PULSE GYM</Text>
            <Text style={style.motto}>
              Your Pocket Friendly Gym Application
            </Text>

            <Text style={[style.welcomeText, { color: "#fff" }]}>
              Portable And Reliable.
            </Text>
          </View>
        </View>
      </View>
      {active != 1 && (
        <View style={style.bottomnav}>
          <Pressable
            style={[style.arrow, { opacity: 0.7, width: 100 }]}
            onPress={() => {
              active > 1 ? setActive(active - 1) : setActive(1);
            }}
          >
            <Text style={style.btntext}>Back</Text>
          </Pressable>

          <Pressable
            style={[style.arrow, { backgroundColor: pink(3, 1), width: "70%" }]}
            onPress={() => {
              active < 3 ? setActive(active + 1) : router.push("login");
            }}
          >
            {active !== 3 ? (
              <Text style={style.btnnext}>Next</Text>
            ) : (
              <Text style={style.btnnext}>Start</Text>
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  //conainer styles
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: text.white1,
    position: "relative",
  },
  //slides
  slidecont: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  slide: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  //1st slide
  image: {
    objectFit: "cover",
  },
  //button
  btn: {},
  btntext: {
    fontSize: 15,
    fontWeight: "bold",
    color: pink(3, 1),
  },
  btnnext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },

  designelement: {
    width: 200,
    height: 200,
    backgroundColor: pink(1,1),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
  //navigation
  bottomnav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  arrow: {
    width: "50%",
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: pink(3, 1),
    justifyContent: "center",
    alignItems: "center",
  },
  buttoncont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  button: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  //2nd slide
  image2: {
    width: 400,
    height: 400,
    objectFit: "cover",
  },
  info: {
    position: "absolute",
    height: "40%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    gap: 5,
  },
  gradient: {
    width: "100%",
  },
  motto: {
    fontWeight:'bold',
    
    fontSize: 12,
    textAlign: "center",
  },
  logo: {
    marginVertical: "2%",
    fontWeight: "bold",
    fontSize: 20,
    color: pink(3, 1),
  },
  welcomeText: {
    fontSize: 13,
    color: text.simpletext,
    fontWeight: "bold",
    textAlign: "center",
  },
  //3rd slide
  info1: {
    position: "absolute",
    height: "40%",
    width: "100%",
    backgroundColor: "#fff",
    bottom: 0,
    alignItems: "center",
    padding: 50,
    gap: 5,
  },
  topdesign: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "150%",
    height: 50,
    top: -20,
    transform: "rotate(5deg)",
  },
  skipctn: {
    position: "absolute",
    zIndex:99,
    top: 15,
    right: 15,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  skip: {
    backgroundColor: pink(3, 1),
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  skiptext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Index;
