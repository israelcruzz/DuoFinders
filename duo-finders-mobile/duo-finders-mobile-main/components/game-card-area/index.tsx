import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface GameCardAreaProps {
  children: ReactNode;
}

export default function GameCardArea({ children }: GameCardAreaProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
});
