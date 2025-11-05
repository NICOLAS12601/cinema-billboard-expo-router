import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesDropDown from "../../components/(tabs)/byCategories";
import data from "../../data/data.json";
import { StyleSheet } from "react-native";

export default function ByCategoriesPage() {
  const categories = data.categories || [];

  return (
    <SafeAreaView style={styles.container}>
      <CategoriesDropDown categories={categories} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
