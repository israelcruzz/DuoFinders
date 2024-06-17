import { tokens } from "@/constants/tokens";
import { StyleSheet, Text, View } from "react-native";

interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return (
    <View>
      <Text style={styles.headingHeaderText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingHeaderText: {
    fontSize: tokens.size.title,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
