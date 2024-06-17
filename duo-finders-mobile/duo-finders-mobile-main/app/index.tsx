import { tokens } from "@/constants/tokens";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/app/assets/images/login-image.png")}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.textLogo}>DuoFinders</Text>

        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Encontre seu duo </Text>
          <Text style={styles.textDescription}>
            Busque por pessoas parecidas com você para jogar contigo!
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
            <MaterialIcons name="discord" size={24} color="white" />
            <Text style={styles.textButton}>Continuar com o Discord</Text>
          </TouchableOpacity>
        </View>
      </View>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 44,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 90,
  },
  textLogo: {
    fontSize: tokens.size.logo,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
  },
  textHeading: {
    fontSize: tokens.size.title,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 8,
  },
  textDescription: {
    fontSize: tokens.size.med,
    color: tokens.colors.lightDarkGray,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: tokens.colors.darkGray,
    flexDirection: "row",
    height: 56,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderRadius: 8,
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  view: {
    width: "100%",
    height: 300,
    backgroundColor: "#FFFFFF",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "80%",
    opacity: 1,
  },
});
