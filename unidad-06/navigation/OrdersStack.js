import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OrdersScreen from "../Screens/OrdersScreen";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

export default function OrdersStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, options }) => ({
        header: () => <Header title={options?.title ?? route.name} />,
      })}
    >
      <Stack.Screen name="Orders" component={OrdersScreen} options={{ title: "Orders" }} />
    </Stack.Navigator>
  );
}
