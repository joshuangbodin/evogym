import { pink, text } from "@/constants/colors";
import { StyleSheet } from "react-native";

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
  