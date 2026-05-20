import { Text, View } from "react-native";

export default function Screen2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Screen 2
      </Text>
    </View>
  );
}
