import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from "./navigation/TabNavigator";

import { Provider } from "react-redux";
import { store } from './store/store.js';

export default function App() {
 
  return ( 
    <NavigationContainer>
      <Provider store={ store } >
        <TabNavigator />

      </Provider>
    
    </NavigationContainer>
    )
}
