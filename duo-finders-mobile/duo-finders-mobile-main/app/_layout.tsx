import { Slot } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {Loading} from "../components/loading/index";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";


export default function Layout() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <SafeAreaView style={styles.safeContainer}>
      {fontLoading ? <Slot /> : <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
