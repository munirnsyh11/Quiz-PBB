import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Latihan3() {
  const personalData = {
    name: "Muhamad Munir Riansyah",
    nim: "242310027",
    phone: "083871670195",
    email: "munirriansyah@gmail.com",
    address: "Bogor",
    age: 21,
    isStudent: true,
    hobby: ["berlari", "berenang", "bersepeda"],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={styles.avatar}
      />

      <Text style={styles.text}>{personalData.name}</Text>
      <Text style={styles.text}>{personalData.nim}</Text>

      {/* FORM */}
      <View style={styles.inputContainer}>
        <Text>Phone</Text>
        <TextInput style={styles.input} value={personalData.phone} />

        <Text>Email</Text>
        <TextInput style={styles.input} value={personalData.email} />

        <Text>Address</Text>
        <TextInput style={styles.input} value={personalData.address} />

        <Text>Age</Text>
        <TextInput style={styles.input} value={String(personalData.age)} />

        <Text>Student</Text>
        <TextInput
          style={styles.input}
          value={personalData.isStudent ? "Yes" : "No"}
        />

        <Text>Hobby</Text>
        <TextInput style={styles.input} value={personalData.hobby.join(", ")} />
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Data disimpan")}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#1e90ff",
    padding: 12,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
