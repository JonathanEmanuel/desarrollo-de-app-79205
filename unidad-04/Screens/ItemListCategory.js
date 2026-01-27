import { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import Header from "../Components/Header";
import ProductItem from "../Components/ProductItem";
import { colors } from "../Global/colors";

export default function ItemListCategory({ category  }) {


  return (
    <View style={styles.screen}>
      <Header title={"Products"} />

      <View style={styles.content}>
        <Pressable style={styles.backBtn}>
          <Text style={styles.backText}>Go back</Text>
        </Pressable>
        <Text> Lista</Text>

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
