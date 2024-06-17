import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Avatar() {
  const navigation = useRouter();

  const handleClickAvatar = () => {
    navigation.push("/profile");
  };

  return (
    <TouchableOpacity onPress={() => handleClickAvatar()}>
      <Image
        source={require("@/app/assets/images/profile-image.png")}
        style={styles.profileImage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 60,
    width: '100%',
    height: '100%',
  },
});
