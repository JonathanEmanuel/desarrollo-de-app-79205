import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../Screens/CartScreen";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, options }) => ({
        header: () => <Header title={options?.title ?? route.name} />,
      })}
    >
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Cart" }} />
    </Stack.Navigator>
  );
}
