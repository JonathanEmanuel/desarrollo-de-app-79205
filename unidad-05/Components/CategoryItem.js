import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../Global/colors";

export default function CategoryItem({ item, onSelect }) {
  return (
    <Pressable style={styles.card} onPress={() => onSelect(item)}>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
  },
  text: { fontSize: 16, fontWeight: "700", color: colors.text },
});
