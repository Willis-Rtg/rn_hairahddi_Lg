import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tab from "./Tab";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { height: "40px" },
    }}
  >
    <Stack.Screen name="Tab" component={Tab} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
