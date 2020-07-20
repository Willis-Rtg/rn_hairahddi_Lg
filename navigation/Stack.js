import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tab from "./Tab";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        height: "50px",
        borderBottomWidth: 0,
      },
      headerTitle: "헤어 아띠",
      headerTitleStyle: { fontFamily: "cute", fontSize: "29px" },
    }}
  >
    <Stack.Screen name="Tab" component={Tab} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
