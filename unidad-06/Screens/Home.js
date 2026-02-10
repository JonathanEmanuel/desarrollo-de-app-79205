import { View, StyleSheet } from "react-native";
import Categories from "../Components/Categories";
import { colors } from "../Global/colors";
import Counter from "../Components/Counter";
export default function Home( { navigation }) {
  return (
    <View style={styles.screen}>
      <Counter />
      <Categories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
});
