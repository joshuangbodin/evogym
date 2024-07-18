import {
  View,
  Text,
  Image,
  StyleSheet,
  //Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
//import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { response } from "@/data/recipe";
import { pink, text } from "@/constants/colors";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

const RecipePage = () => {
  const [bottom, setBottom] = useState(-100);

  const [recipes, setRecipes] = useState<response>();
  const { id } = useLocalSearchParams();
  var index = Number(id);
  useEffect(() => {
    AsyncStorage.getItem("recipes").then((res) => {
      if (typeof res == "string") {
        var data = JSON.parse(res);

        setRecipes(data);
      } else {
      }
    });
  }, []);
  return (
    <View style={{ width: "100%", height: "100%", flex: 1 }}>
      {recipes ? (
        <View style={style.container}>
          <View style={style.top}>
            <Pressable
              onPress={() => {
                router.push("(tabs)/healthdrinks");
              }}
              style={style.back}
            >
              <View style={style.backbtn}>
                <Feather size={25}  name="chevron-left" />
              </View>
            </Pressable>
            <Image
              style={style.image}
              source={{ uri: recipes.data.meals[index].strMealThumb }}
            ></Image>
          </View>

          <Animated.View
            entering={FadeInDown}
            style={[style.bottom, { bottom }]}
          >
            <Pressable
              onPress={() => {
                bottom == -10 ? setBottom(-200) : setBottom(-10);
              }}
              style={style.pressable}
            >
              
              <View style={style.topdesign}></View>
            </Pressable>

            <ScrollView  showsVerticalScrollIndicator={false}>
              <View style={style.name}>
                <View style={style.nameleft}>
                  <Text style={style.nametext}>
                    {recipes.data.meals[index].strMeal}
                  </Text>
                  <Text style={style.nameregion}>
                    {recipes.data.meals[index].strArea}
                  </Text>
                </View>

                <View style={style.nameright}>
                  <View style={style.rating}>
                    <MaterialCommunityIcons
                      size={18}
                      color={'#fff'}
                      name="star"
                    />
                    <Text style={style.ratingtext}>4.5</Text>
                  </View>
                </View>
              </View>

              <View style={style.design}>
                <View style={style.designitem}>
                  <View style={style.designicon}>
                    <FontAwesome6  name="users" color={pink(3,1)} size={25} />
                  </View>
                  <View style={style.text}>
                    <Text style={style.firsttext}>03</Text>
                    <Text style={style.secndtext}>Servings</Text>
                  </View>
                </View>
                <View style={style.designitem}>
                  <View style={style.designicon}>
                    <FontAwesome6  name="clock" color={pink(3,1)} size={25} />
                  </View>
                  <View style={style.text}>
                    <Text style={style.firsttext}>45</Text>
                    <Text style={style.secndtext}>mins</Text>
                  </View>
                </View>
                <View style={style.designitem}>
                  <View style={style.designicon}>
                    <FontAwesome6  name="fire" color={pink(3,1)} size={25} />
                  </View>
                  <View style={style.text}>
                    <Text style={style.firsttext}>103</Text>
                    <Text style={style.secndtext}>Cal</Text>
                  </View>
                </View>
                <View style={style.designitem}>
                  <View style={style.designicon}>
                    <FontAwesome6 
                      name="layer-group"
                      color={pink(3,1)}
                      size={25}
                    />
                  </View>
                  <View style={style.text}>
                    <Text style={style.firsttext}>Easy</Text>
                  </View>
                </View>
              </View>

              <View style={style.ingredients}>
                <View>
                  <Text style={style.ingredienttitle}>Ingredients</Text>
                </View>
                <View style={style.ingredientcnt}>
                  {recipes.data.meals[index].strIngredient1 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure1}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient1}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient2 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure2}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient2}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient3 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure3}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient3}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient4 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure4}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient4}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient5 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure5}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient5}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient6 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure6}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient6}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient7 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure7}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient7}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient8 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure8}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient8}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient9 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure9}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient9}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient10 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure10}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient10}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient11 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure11}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient11}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient12 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure12}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient12}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient13 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure13}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient13}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient14 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure14}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient14}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient15 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure15}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient15}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient16 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure16}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient16}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient17 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure17}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient17}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient18 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure18}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient18}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient19 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure19}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient19}
                      </Text>
                    </View>
                  )}
                  {recipes.data.meals[index].strIngredient20 !== "" && (
                    <View style={style.ingredientitem}>
                      <Bullet />
                      <Text style={style.measure}>
                        {recipes.data.meals[index].strMeasure20}
                      </Text>
                      <Text style={style.ingredientname}>
                        {recipes.data.meals[index].strIngredient20}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View>
                <View>
                  <Text style={style.ingredienttitle}>Directions</Text>
                </View>

                <View style={style.directioncnt}>
                  {recipes.data.meals[index].strInstructions.split(".").map(
                    (item, index) =>
                      item !== "" && (
                        <View key={index} style={style.directionitem}>
                          <Bullet />
                          <Text style={style.directioncnttext}>{item}</Text>
                        </View>
                      )
                  )}
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      ) : (
        <View>
          <Text>Can't Reach the Server</Text>
        </View>
      )}
    </View>
  );
};

export default RecipePage;

const Bullet = () => {
  return <View style={style.bullet}></View>;
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
    flex: 1,
    backgroundColor: text.white,
  },

  //top
  top: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
  },
  image: {
    width: "100%",
    height: "55%",
    position: "absolute",
    zIndex: 98,
    top: 0,
    left: 0,
    backgroundColor: "black",
    objectFit: "cover",
  },

  //bottom
  bottom: {
    width: "100%",
    height: "75%",
    backgroundColor: text.white1,
    padding: 10,
    position: "absolute",
    bottom: -10,
    borderRadius: 30,
  },

  //topdesign
  topdesign: {
    width: 70,
    height: 7,
    backgroundColor: "lightgray",
    borderRadius: 100,
    alignSelf: "center",
  },

  pressable:{
    height:20
  }
,
  //name
  name: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    marginTop: 10,
  },
  nameleft: {
    flex: 1,
  },
  nametext: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    flexWrap: "wrap",
  },
  nameregion: {
    fontWeight: "semibold",
    color: "gray",
  },
  nameright: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: pink(3, 1),
    padding: 5,
    borderRadius: 100,
    paddingHorizontal: 10,
  },
  ratingtext: {
     color:'#fff',
    fontWeight: "bold",
  },

  //bullet
  bullet: {
    width: 10,
    borderRadius: 100,
    height: 10,
    backgroundColor: pink(3, 1),
    marginHorizontal: 10,
  },
  //ingredients
  ingredients: {
    paddingVertical: 25,
  },
  ingredienttitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientcnt: {
    justifyContent: "center",
    paddingVertical: 10,
  },
  ingredientitem: {
    flexDirection: "row",
    gap: 10,
    padding: 5,
  },
  measure: {
    fontWeight: "bold",
    fontSize: 15,
  },

  ingredientname: {
    fontSize: 13,
  },

  //direction

  directioncnt: {
    paddingVertical: 15,
  },
  directioncnttext: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    textAlignVertical: "top",
    fontSize: 14,
  },
  directionitem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },

  //design
  design: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  designitem: {
    width: 60,
    padding: 5,
    height: 110,
    backgroundColor: pink(3, 1),
    alignItems: "center",
    borderRadius: 100,
  },
  designicon: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    color:''
  },
  firsttext: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: 15,
  },
  secndtext: {
    fontSize: 12,
    color: '#fff',
  },

  //back
  back: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 99,
  },
  backbtn: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
