import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import { colors } from "../Global/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopColor: "transparent",
          height: 60,
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName = "home";
          if (route.name === "Shop") iconName = focused ? "storefront" : "storefront-outline";
          if (route.name === "Cart") iconName = focused ? "cart" : "cart-outline";
          if (route.name === "Orders") iconName = focused ? "receipt" : "receipt-outline";

          return (
            <Ionicons
              name={iconName}
              size={size ?? 24}
              color={focused ? colors.cardDark : colors.text}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Carts" component={CartStack} />
      <Tab.Screen name="Orders" component={OrdersStack} />
    </Tab.Navigator>
  );
}
