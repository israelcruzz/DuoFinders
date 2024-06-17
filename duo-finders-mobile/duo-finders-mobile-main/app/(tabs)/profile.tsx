import Avatar from "@/components/avatar";
import Heading from "@/components/heading";
import { tokens } from "@/constants/tokens";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SectionText from "@/components/section-text";
import MeAd from "@/components/me-ad";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Heading title="Perfil" />

      <View style={styles.profileArea}>
        <View style={styles.profileAreaTextAndAvatar}>
          <View style={styles.avatarArea}>
            <Avatar />
          </View>

          <View>
            <Text style={styles.name}>Israel</Text>
            <Text style={styles.discord}>@israelcruzz</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="exit-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <SectionText title="Seus Anúncios" />
      <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.areaAds}>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <MeAd
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
        </View>
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
  profileArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  profileAreaTextAndAvatar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarArea: {
    width: 78,
    height: 78,
  },
  name: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
  },
  discord: {
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "400",
    fontSize: 16,
  },
  areaAds: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
