import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { pink, randcol, text } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const color = randcol();

const Calc = () => {
  const { name } = useLocalSearchParams();
  const [selected, setSelected] = useState(name);
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const [gender, setGender] = useState("Male");
  const paddingTop = top > 0 ? top + 10 : top + 20;

  return (
    <View style={[style.container, { paddingTop: paddingTop }]}>
      <Pressable
        onPress={() => {
          router.back();
          router.push('home')
        }}
        style={style.goback}
      >
        <Feather color={color} size={25} name="chevrons-left" />
      </Pressable>
      <View style={style.topdesign}>
        <Text style={style.topText}>
          {selected == "bmi"
            ? "Body Mass Index (BMI)"
            : "Ideal Body Weight (IBW)"}
        </Text>
        <Image
          style={style.image}
          source={require("../assets/images/bmi.png")}
        />
      </View>
      <ScrollView>
        <View style={style.gender}>
          <Pressable
            onPress={() => {
              setGender("Male");
            }}
            style={[
              style.genderbtn,
              { backgroundColor: gender == "Male" ? color : "#fff" },
            ]}
          >
            <View>
              <Text
                style={[
                  style.gendertext,
                  { color: gender == "Male" ? "#fff" : "black" },
                ]}
              >
                Male
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setGender("Female");
            }}
            style={[
              style.genderbtn,
              { backgroundColor: gender == "Female" ? color : "#fff" },
            ]}
          >
            <View>
              <Text
                style={[
                  style.gendertext,
                  { color: gender == "Female" ? "#fff" : "black" },
                ]}
              >
                Female
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={style.form}>
          <View style={style.formitem}>
            <Text style={style.label}>Age:</Text>
            <TextInput style={style.textinput} keyboardType="numeric" placeholder="Age e.g 27" />
          </View>
          <View style={style.formitem}>
          <Text style={style.label}>Weight:</Text>
            <TextInput
              style={style.textinput} keyboardType="numeric"
              placeholder="e.g 78 kg"
            />
          </View>
          <View style={style.formitem}>
          <Text style={style.label}>Height:</Text>
            <TextInput
              style={style.textinput} keyboardType="numeric"
              placeholder="e.g 185cm"
            />
          </View>
        </View>
        <View style={style.btncont}>
          <Pressable style={style.btn}>
            <Text style={style.btntext}>Generate Bmi</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: text.white,
    padding: 15,
  },
  topdesign: {
    flexDirection: "column-reverse",
    width: "100%",
    height: 200,
    backgroundColor: color,
    borderRadius: 25,
    borderCurve: "continuous",
    position: "relative",
    overflow: "hidden",
    padding: 30,
  },
  topText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  image: {
    width: 300,
    height: 250,
    position: "absolute",
    bottom: -52,
    right: -80,
    zIndex: -10,
  },
  goback: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: text.white1,
    borderRadius: 30,
    zIndex: 99,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
  },

  //gender section
  gender: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
  },
  genderbtn: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 20,
  },
  gendertext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  
  //form
  form: {
    marginVertical:20,
    gap: 30,
  },

  textinput: {
    flex:1,
    backgroundColor: "#fff",
    color: "rgb(80,80,80)",
    fontSize: 15,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },

  formitem:{
    flexDirection:"row" , alignItems:"center", justifyContent:"space-between"
  },

  label:{
    fontSize:15,
    padding:10,
    fontWeight:"bold",
    color:color,
    width:100
  },

  //btn
  btncont:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:50,
  }
  ,  
  btn:{
    width:"100%",
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: color,
    borderRadius:20,
    borderCurve:"continuous"
  
  },
  btntext:{
    color:"#fff",
    fontSize: 15,
    fontWeight: 'bold',

  }

});
export default Calc;
