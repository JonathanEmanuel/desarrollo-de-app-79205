import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Global/colors";

export default function Header({ title='Hola! ' }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40, 
    paddingBottom: 12,
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  title: { fontSize: 22, fontWeight: "700", color: colors.text },
});
