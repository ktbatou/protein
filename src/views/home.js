import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import SignInButton from "../components/signInButton";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.proteinImg}
          source={require("../../assets/splash.png")}
        />
        <Text style={styles.title}>Swifty Protein</Text>
      </View>
      <SignInButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  proteinImg: {
    height: 150,
    width: 200,
  },
  title: {
    color: "#F6B0B0",
    fontSize: 24,
    alignSelf: "center",
  },
});
