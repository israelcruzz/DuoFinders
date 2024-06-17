import { tokens } from "@/constants/tokens";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Keyboard, StyleSheet, TextInput, View } from "react-native";

export default function SearchInput() {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = () => {
    Alert.alert("test", "test");
    setQuery("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.searchInput}>
      <Feather name="search" size={24} color={tokens.colors.lightDarkGray} />
      <TextInput
        placeholder="Search Games"
        style={styles.input}
        placeholderTextColor={tokens.colors.lightDarkGray}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
        value={query}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: "row",
    backgroundColor: tokens.colors.darkBackground,
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
    gap: 16,
  },
  input: {
    color: tokens.colors.lightDarkGray,
    flex: 1
  },
});
