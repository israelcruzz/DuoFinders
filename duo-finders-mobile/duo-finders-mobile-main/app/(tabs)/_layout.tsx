import { tokens } from "@/constants/tokens";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.lightDarkGray,
        tabBarStyle: styles.tab,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarAccessibilityLabel: "home screen",
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="games"
        options={{
          tabBarAccessibilityLabel: "games screen",
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller-sharp" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarAccessibilityLabel: "profile screen",
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: tokens.colors.background,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
  },
});
