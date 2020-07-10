import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Intro from "../screens/Intro";
import Menu from "../screens/Menu";
import Book from "../screens/Book";
import Review from "../screens/Review";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Intro" component={Intro} />
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Book" component={Book} />
    <Tab.Screen name="Review" component={Review} />
  </Tab.Navigator>
);
