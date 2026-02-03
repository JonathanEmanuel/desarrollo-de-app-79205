import { FlatList, View, StyleSheet, Text } from "react-native";
import CategoryItem from "./CategoryItem";
import categories from "../Data/categories.json";
import { colors } from "../Global/colors";

export default function Categories({ onSelectCategory }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ categories}
        keyExtractor={ (it) => it.id }
        renderItem={ ( { item }) => (
          <CategoryItem item={item} onSelect={ onSelectCategory} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.bg, 
    padding: 16 
  },
});
