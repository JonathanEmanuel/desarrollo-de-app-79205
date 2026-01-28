import { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";
import allProducts from "../Data/products2.json";
import { colors } from "../Global/colors";

export default function ItemListCategory({ category, onGoBack  }) {

  const [ keyword, setKeyword] = useState("");
  const [ products, setProducts ] = useState( [])

  useEffect( () => {

    if( category ) { // Si se paso una categoría filtramos por categoría y palabra
      const products = allProducts.filter( product => product.category === category);
      const productsFiltered = products.filter( product => product.title.toLowerCase().includes( keyword.toLowerCase() ) );
      setProducts(productsFiltered);

    } else {
      const productsFiltered = allProducts.filter( product => product.title.toLowerCase().includes( keyword.toLowerCase() ) );
      setProducts(productsFiltered);
    }

  }, [ keyword, category] )

  return (
    <View style={styles.screen}>
      <Header title={"Products"} />

      <View style={styles.content}>
        <Pressable style={styles.backBtn} onPress={ onGoBack}>
          <Text style={styles.backText}>Go back</Text>
        </Pressable>
        <Search onSearch={ setKeyword }/>

        <FlatList 
          data={products}
          keyExtractor={ (it) => it.id }
          renderItem={ ( {item} ) => <ProductItem item={item} /> }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
  content: { 
    flex: 1, 
    padding: 16 
  },
  backBtn: { 
    alignSelf: "center", 
    marginBottom: 10 
  },
  backText: { 
    fontWeight: "700" 
  },
});
