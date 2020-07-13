import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import { AppLoading } from "expo";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (iamges) => {
  iamges.map((image) => {
    if (typeof image === "String") return Image.prefetch(image);
    else return Asset.fromModule(image).downloadAsync();
  });
};
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [ready, setReady] = useState(true);

  const loadAssets = async () => {
    const images = cacheImages([require("./assets/slides/welcome.jpg")]);
    const fonts = cacheFonts([
      Ionicons.font,
      { cute: require("./assets/fonts/CuteFont-Regular.ttf") },
    ]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => {
    setReady(false);
  };

  return ready ? (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  ) : (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
