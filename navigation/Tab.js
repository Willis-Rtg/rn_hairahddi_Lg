import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Intro from "../screens/Intro";
import Menu from "../screens/Menu";
import Book from "../screens/Book";
import Review from "../screens/Review";
import Home from "../screens/Home";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const changeHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Home";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = changeHeaderName(route);
    navigation.setOptions({ title });
  }, [route]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          route.name === "Home"
            ? (iconName += "home")
            : route.name === "Intro"
            ? (iconName += "clipboard")
            : route.name === "Menu"
            ? (iconName += "grid")
            : route.name === "Book"
            ? (iconName += "calendar")
            : route.name === "Review"
            ? (iconName += "chatbubbles")
            : null;
          return <Ionicons name={iconName} size={18} color="grey" />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Intro" component={Intro} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Book" component={Book} />
      <Tab.Screen name="Review" component={Review} />
    </Tab.Navigator>
  );
};
