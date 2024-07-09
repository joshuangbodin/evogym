import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  ActivityIndicator,
  Modal,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pink, text } from "@/constants/colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Storage from "@/appStorage/Storage";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { avatars, getImgByName } from "@/data/avatars";
const color = pink(3, 1);

const Login = () => {
  //avatar state
  const [avatar, setAvatar] = useState("white");
  //modal
  const [visible, setVisible] = useState(false);
  //loading and form auth
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  const router = useRouter();

  //states for the inputs

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  //useeffect

  useEffect(() => {
    AsyncStorage.getItem("user-name")
      .then((res) => {
        typeof res == "string" ? router.push("home") : null;
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = () => {
    setLoading(true);
    if (name && age && weight && height) {
      Storage.storeName(name);
      Storage.storeAge(age);
      Storage.storeWeight(weight);
      Storage.storeHeight(height);

      var name3;
      AsyncStorage.getItem("user-name")
        .then((res) => {
          name3 = res;
        })
        .catch((err) => console.log(err));
      if (name3 !== null) {
        router.push("(tabs)/home");
      }
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <View style={[style.container, { paddingTop }]}>
      <View
        style={{
          width: "100%",
          borderRadius: 20,
          display: error ? "flex" : "none",
          gap: 10,
          height: 30,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "red",
          position: "absolute",
          bottom: 5,
          left: "20%",
          transform: "translateX(-50vw)",
        }}
      >
        <Ionicons name="warning" color={"#fff"} />
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Please Fill all Fields
        </Text>
      </View>
      <Pressable
        onPress={() => {
          router.push("/");
        }}
      >
        <Feather name="chevrons-left" size={25} color={color} />
      </Pressable>

      <View style={style.top}>
        <Text style={style.Texttop}>Register</Text>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}
        >
          <Image
            source={getImgByName(avatar)}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          ></Image>
        </Pressable>
      </View>

      <View style={style.form}>
        <View style={style.formflex}>
          <TextInput
            style={[style.input, { width: "50%" }]}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          ></TextInput>
          <TextInput
            style={[style.input, { width: "50%" }]}
            value={age}
            onChangeText={setAge}
            placeholder="Age"
          ></TextInput>
        </View>
        <TextInput
          style={style.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight"
        ></TextInput>
        <TextInput
          style={style.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Height"
        ></TextInput>
        <Pressable style={style.btn} onPress={submit}>
          {loading ? (
            <ActivityIndicator size={"small"} color={"#fff"} />
          ) : (
            <Text style={style.btntext}>Register</Text>
          )}
        </Pressable>
      </View>

      <Modal visible={visible}>
        <View
          style={{
            padding: 30,
            justifyContent: "center",
            gap: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setVisible(false);
            }}
          >
            <MaterialIcons size={25} color={pink(3, 1)} name="cancel" />
          </Pressable>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: pink(3, 1) }}>
            Select an Avatar
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <FlatList
            data={avatars}
            contentContainerStyle={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
            renderItem={(item) => (
              <Pressable
                onPress={() => {
                  setAvatar(item.item.name);
                  setVisible(false);
                }}
              >
                <Image
                  source={item.item.avatarimg}
                  style={{
                    width: 150,
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 100,
                  }}
                ></Image>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: text.white,
    flex: 1,
  },
  //top
  top: {
    padding: 5,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Texttop: {
    fontSize: 25,
    fontWeight: "bold",
    color: color,
  },

  //form
  form: {
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 60,
    height: 400,
  },
  formflex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    color: color,
    fontSize: 15,
  },
  btn: {
    width: "100%",
    backgroundColor: color,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btntext: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
