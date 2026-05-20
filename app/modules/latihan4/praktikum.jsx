import { SafeAreaView, ScrollView } from "react-native";
import BookCollections from "./components/BookCollections";
import CTABook from "./components/CTABook";
import Categories from "./components/Categories";
import Header from "./components/Header";
import styles from "./styles/StyleApps";

export default function Praktikum4() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header />

        <CTABook />

        <Categories />

        <BookCollections
          books={[
            {
              id: 1,
              title: "Atomic Habits",
              author: "James Clear",
              img: require("../../../assets/images/book1.jpg"),
            },
            {
              id: 2,
              title: "Deep Work",
              author: "Cal Newport",
              img: require("../../../assets/images/book2.jpg"),
            },
            {
              id: 3,
              title: "Rich Dad",
              author: "Kiyosaki",
              img: require("../../../assets/images/book3.jpg"),
            },
            {
              id: 4,
              title: "Psychology",
              author: "David Myers",
              img: require("../../../assets/images/book4.jpg"),
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
