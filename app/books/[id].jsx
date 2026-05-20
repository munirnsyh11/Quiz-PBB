import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailBook() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Detail Buku
      </Text>

      <Text
        style={{
          fontSize: 20,
        }}
      >
        ID Buku : {id}
      </Text>
    </View>
  );
}
