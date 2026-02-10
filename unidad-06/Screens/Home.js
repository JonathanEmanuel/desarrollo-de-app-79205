import { View, StyleSheet } from "react-native";
import Categories from "../Components/Categories";
import { colors } from "../Global/colors";

export default function Home( { navigation }) {
  return (
    <View style={styles.screen}>
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
