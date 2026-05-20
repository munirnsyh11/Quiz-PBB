import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

import BookCollections from "../modules/latihan4/components/BookCollections";
import SearchBar from "../modules/latihan4/components/SearchBar";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  // 🔥 DATA BUKU
  const ListBook = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      img: require("../../assets/images/book1.jpg"),
    },
    {
      id: 2,
      title: "Deep Work",
      author: "Cal Newport",
      img: require("../../assets/images/book2.jpg"),
    },
    {
      id: 3,
      title: "Rich Dad",
      author: "Kiyosaki",
      img: require("../../assets/images/book3.jpg"),
    },
    {
      id: 4,
      title: "Psychology",
      author: "David Myers",
      img: require("../../assets/images/book4.jpg"),
    },
  ];

  const [books] = useState(ListBook);

  // 🔥 FILTER SEARCH (useMemo sesuai modul)
  const BookDataMemori = useMemo(() => {
    let computedData = [...books];

    if (search) {
      computedData = computedData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return computedData;
  }, [search, books]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <SearchBar value={search} setValue={setSearch} />

      <ScrollView>
        <BookCollections books={BookDataMemori} />
      </ScrollView>
    </SafeAreaView>
  );
}
