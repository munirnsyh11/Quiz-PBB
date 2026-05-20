import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Latihan3() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar */}
      <Image
        source={require("../../assets/images/avatar.png")}
        style={styles.avatar}
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama:</Text>
          <TextInput style={styles.input} value="Muhamad Munir Riansyah" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>NIP:</Text>
          <TextInput style={styles.input} value="242310027" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Jabatan:</Text>
          <TextInput style={styles.input} value="Mahasiswa" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Institusi:</Text>
          <TextInput style={styles.input} value="IBI Kesatuan" />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#000",
    marginBottom: 30,
  },

  formContainer: {
    width: "100%",
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  label: {
    width: 80,
    fontSize: 18,
    fontWeight: "bold",
    color: "#999",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#22a6d5",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
