import Ad from "@/components/ad";
import ButtonBack from "@/components/button-back";
import SectionText from "@/components/section-text";
import { tokens } from "@/constants/tokens";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface GameParams {
  key: string;
  name: string;
  params: {
    id: string;
  };
}

export default function Game({}) {
  const { params } = useRoute<GameParams>();

  return (
    <View style={styles.container}>
      <View style={styles.areaPhotoGame}>
        <Image
          style={styles.photoGame}
          source={require("@/app/assets/images/league-of-legends-game.png")}
        />
        <View style={styles.buttonBackArea}>
          <ButtonBack />
        </View>
      </View>

      <View style={styles.areaCardText}>
        <SectionText title="League of Legends" />
        <Text style={styles.description}>512 Anúncios</Text>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Ad
              id={index.toString()}
              name="mizuky"
              key={index}
              hourEnd={20}
              hourStart={16}
              useVoiceChannel={index % 2 === 0}
              weekDays="seg,ter,qua"
              yearsPlaying={6}
            />
          );
        })}
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
  },
  areaPhotoGame: {
    width: "100%",
  },
  photoGame: {
    width: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  buttonBackArea: {
    position: "absolute",
    top: 0,
    margin: 12,
  },
  description: {
    fontSize: tokens.size.sub,
    color: tokens.colors.paragraph,
    fontWeight: "400",
  },
  areaCardText: {
    gap: 4,
  },
  scrollArea: {
    gap: 12
  }
});
