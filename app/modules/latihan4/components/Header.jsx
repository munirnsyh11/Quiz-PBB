import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles/StyleApps";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Good Morning 👋</Text>
        <Text style={styles.subtitle}>Find your favorite book</Text>
      </View>

      <Ionicons
        name="search-outline"
        size={24}
        color="black"
        onPress={() => router.push("/Search")}
      />
    </View>
  );
}
