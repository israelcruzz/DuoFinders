import GameCard from "@/components/game-card";
import GameCardArea from "@/components/game-card-area";
import Heading from "@/components/heading";
import SearchInput from "@/components/search-input";
import { tokens } from "@/constants/tokens";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Games() {
  return (
    <View style={styles.container}>
      <Heading title="Games" />

      <SearchInput />

      <ScrollView contentContainerStyle={styles.scrollArea}  >
        <GameCardArea>
          {Array.from({ length: 10 }).map((_, index) => {
            return <GameCard key={index} countAds={index} id={index.toString()} imageUri="" name="League of Legends" />;
          })}
        </GameCardArea>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
    paddingVertical: 44,
    paddingHorizontal: 24,
    gap: 24,
    height: '100%'
  },
  scrollArea: {
  }
});
