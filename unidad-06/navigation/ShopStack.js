import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";
import ItemListCategory from "../Screens/ItemListCategory";
import ItemDetail from "../Screens/ItemDetail";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, options }) => ({
        // Header común
        header: () => <Header title={options?.title ?? route.name} />,
      })}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Categories" }} />
      <Stack.Screen
        name="ItemListCategory"
        component={ItemListCategory}
        options={({ route }) => ({
          title: route?.params?.category?.title ?? "Products",
        })}
      />
      <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: "Detail" }} />
    </Stack.Navigator>
  );
}
