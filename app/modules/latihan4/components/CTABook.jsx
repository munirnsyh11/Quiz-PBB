import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/StyleApps";

export default function CTABook() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Featured Book</Text>
      <Text style={styles.subtitle}>Atomic Habits</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Read Now</Text>
      </TouchableOpacity>
    </View>
  );
}
