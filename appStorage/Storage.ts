import AsyncStorage from "@react-native-async-storage/async-storage";

//store
const storeName = async (value: string) => {
  try {
    await AsyncStorage.setItem("user-name", value);
  } catch (e) {
    console.error(e);
  }
};

const storeAge = async (value: string) => {
  try {
    await AsyncStorage.setItem("user-age", value);
  } catch (e) {
    console.error(e);
  }
};

const storeWeight = async (value: string) => {
  try {
    await AsyncStorage.setItem("user-weight", value);
  } catch (e) {
    console.error(e);
  }
};

const storeHeight = async (value: string) => {
  try {
    await AsyncStorage.setItem("user-height", value);
  } catch (e) {
    console.error(e);
  }
};

const storeAvatar = async (value: string) => {
  try {
    await AsyncStorage.setItem("user-avatar", value);
  } catch (e) {
    console.error(e);
  }
};



export default {
  storeAge,
  storeWeight,
  storeHeight,
  storeName,
  storeAvatar
};
