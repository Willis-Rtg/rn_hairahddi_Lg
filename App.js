import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [ready, setReady] = useState(true);

  const loadAssets = async () => {
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...fonts]);
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
