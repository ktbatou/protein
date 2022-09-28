import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, AppState } from "react-native";
import { useRef, useEffect } from "react";
import SignInButton from "../components/signInButton";
import { Restart } from "fiction-expo-restart";

export default function HomeScreen() {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState == "background") {
        Restart();
      }
    });
  });

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
