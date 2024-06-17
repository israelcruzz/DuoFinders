import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AdTextSection from "../ad-text-section";
import { tokens } from "@/constants/tokens";
import { Ionicons } from "@expo/vector-icons";

interface AdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

export default function Ad({
  id,
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,
}: AdProps) {
  return (
    <View style={styles.container}>
      <View style={styles.adAreaText}>
        <AdTextSection head="Nome" description={name} />
        <AdTextSection
          head="Tempo de Jogo"
          description={`${yearsPlaying} anos`}
        />
        <AdTextSection
          head="Disponibilidade"
          description={`${weekDays} - ${hourStart}|${hourEnd}hrs`}
        />
        <AdTextSection
          head="Chamada de Áudio"
          description={useVoiceChannel ? "Sim" : "Não"}
          color={{ active: useVoiceChannel }}
        />
      </View>

      <TouchableOpacity style={styles.viewDiscordButton}>
        <Ionicons name="game-controller" size={24} color="white" />
        <Text style={styles.viewDiscordButtonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 328,
    backgroundColor: tokens.colors.lightGray,
    gap: 16,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  adAreaText: {
    gap: 16
  },
  viewDiscordButton: {
    width: "100%",
    backgroundColor: tokens.colors.secondary,
    borderRadius: 10,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  viewDiscordButtonText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 12,
  },
});
