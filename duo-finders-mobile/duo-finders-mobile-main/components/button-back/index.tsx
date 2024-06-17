import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { tokens } from "@/constants/tokens";
import { useRouter } from "expo-router";

export default function ButtonBack() {
  const router = useRouter();

  const handleClickButton = () => {
    router.back();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleClickButton()}
    >
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: tokens.colors.background,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
