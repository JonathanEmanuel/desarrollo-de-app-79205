import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory'


const Navigator = () => {

    const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ Home} />
            <Stack.Screen name='ItemListCategory' component={ ItemListCategory}/>
        </Stack.Navigator>

  )
}

export default Navigator