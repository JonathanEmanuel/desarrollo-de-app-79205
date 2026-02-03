import { View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import { colors } from "../Global/colors";

export default function Home( {onPickCategory }) {
  return (
    <View style={styles.screen}>
      <Header title="Categories" />
      <Categories onSelectCategory={onPickCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
});
