import { ScrollView, Text, View } from "react-native";
import styles from "../styles/StyleApps";

export default function Categories() {
  const data = ["All", "Fiction", "Business", "Self Dev", "Science"];

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#eee",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
              marginRight: 10,
              marginTop: 10,
            }}
          >
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
