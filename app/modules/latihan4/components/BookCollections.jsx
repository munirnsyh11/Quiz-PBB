import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/StyleApps";

export default function BookCollections({ books = [] }) {
  const router = useRouter();

  return (
    <View>
      <Text style={styles.title}>Book Collections</Text>

      <Text style={{ marginBottom: 10 }}>Total {books.length} item</Text>

      {books.length === 0 ? (
        <Text style={{ color: "red" }}>No record found</Text>
      ) : (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {books.map((book, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(`/books/${book.id}`)}
              style={{
                width: "48%",
                margin: "1%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 10,
                elevation: 3,
              }}
            >
              <Image
                source={book.img}
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 8,
                }}
              />

              <Text
                style={{
                  marginTop: 5,
                  fontWeight: "bold",
                }}
              >
                {book.title}
              </Text>

              <Text>{book.author}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
