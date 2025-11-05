import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="allMovies"
        options={{
          title: "All Movies",
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🎬</Text>,
        }}
      />
      <Tabs.Screen
        name="byCategories"
        options={{
          title: "By Categories",
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>📂</Text>,
        }}
      />
    </Tabs>
  );
}
