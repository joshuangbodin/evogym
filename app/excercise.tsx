import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { options } from "@/api/api";

const welcome = () => {
  const [exercises, setExcercises] = useState<any[]>([]);
  const [time, setTime] = useState(0);

  const apiUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0`;

  const getExcercises = () => {
    axios({
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
      params: {
        limit: "10",
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "538ced0dacmshc30c59be05a8be6p1f3914jsn666d638dc24d",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => {
        console.log(res);
        setExcercises(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Pressable
        onPress={() => {
          getExcercises();
        }}
      >
        <Text>get excercises</Text>
      </Pressable>
      <View>
        {exercises && exercises.map((item) =><View/>)}
      </View>
    </View>
  );
};

export default welcome;
