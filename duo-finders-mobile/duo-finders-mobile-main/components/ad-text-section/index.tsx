import { tokens } from "@/constants/tokens";
import { StyleSheet, Text, View } from "react-native";

interface AdTextSectionProps {
  head: string;
  description: string;
  color?: {
    active: boolean;
  };
}

export default function AdTextSection({
  head,
  description,
  color,
}: AdTextSectionProps) {
  const textStyle =
    color === undefined
      ? styles.normalText
      : color.active
      ? styles.activeText
      : styles.inactiveText;

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{head}</Text>
      <Text style={[styles.normalText, textStyle]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  headText: {
    fontSize: 12,
    fontWeight: "400",
    color: tokens.colors.head,
  },
  normalText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  activeText: {
    color: tokens.colors.green,
  },
  inactiveText: {
    color: tokens.colors.red,
  },
});
