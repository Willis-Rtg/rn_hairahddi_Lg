import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tab from "./Tab";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { height: "45px" },
      headerTitle: "헤어 아띠",
      headerTitleStyle: { fontFamily: "cute", fontSize: "28px" },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
