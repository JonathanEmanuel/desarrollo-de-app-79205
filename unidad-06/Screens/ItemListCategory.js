import { useEffect, useMemo, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";

import productsData from "../Data/products2.json";
import { colors } from "../Global/colors";


  // Recibe navigation y route
  // La category llega por route.params.category
 
export default function ItemListCategory({ navigation, route }) {
  const category = route?.params?.category;

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const hasNumbers = useMemo(() => /\d/.test(keyword), [keyword]);

  useEffect(() => {
    // Filtro por categoría (si existe)
    const base = category
      ? productsData.filter((p) => p.category === category.title)
      : productsData;

    // Filtro por keyword
    const filtered = hasNumbers
      ? base
      : base.filter((p) =>
          p.title.toLowerCase().includes(keyword.trim().toLowerCase())
        );

    setProducts(filtered);
  }, [category, keyword, hasNumbers]);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Search onSearch={setKeyword} />

        <FlatList
          data={products}
          keyExtractor={(it) => String(it.id)}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
