import { View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import { colors } from "../Global/colors";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header title="Categories" />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
});
