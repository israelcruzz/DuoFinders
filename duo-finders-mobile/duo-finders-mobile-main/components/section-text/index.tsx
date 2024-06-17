import { tokens } from "@/constants/tokens";
import { StyleSheet, Text } from "react-native";

interface SectionTextProps {
  title: string;
}

export default function SectionText({ title }: SectionTextProps) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: tokens.size.logo,
    fontWeight: "600",
  },
});
