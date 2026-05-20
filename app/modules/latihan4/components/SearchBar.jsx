import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBar({ value, setValue }) {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 8,
        }}
      >
        <Ionicons name="search-outline" size={18} color="gray" />

        <TextInput
          style={{ marginLeft: 8, flex: 1 }}
          placeholder="Search here"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </View>
  );
}
