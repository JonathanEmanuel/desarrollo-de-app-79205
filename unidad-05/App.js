import { useState } from "react";
import Home from "./Screens/Home";
import ItemListCategory from "./Screens/ItemListCategory";

export default function App() {
  const [ activeScreen, setActiveScreen] = useState('PRODUCTS');
  const [ selectedCategory, setSelectedCategory] = useState(null)

  const handlePickCategory = ( cat ) => {
    setSelectedCategory( cat );
    setActiveScreen('PRODUCTS');
  }

  const handleGoBack = () => {
    setActiveScreen('HOME');
    setSelectedCategory(null);
  }

  return activeScreen === 'HOME' ? ( 
      <Home onPickCategory={ handlePickCategory} /> 
    ) : ( 
      <ItemListCategory category={ selectedCategory} onGoBack={ handleGoBack} /> 
    )
}
