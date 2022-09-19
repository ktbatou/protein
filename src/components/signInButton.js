import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import { BiometricEnrollement } from "../../hardwareCompatible";

export default function SignInButton() {
  const [isCompatible, setIsCompatible] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsCompatible(compatible);
    })();
  });

  if (isCompatible === true) {
    return (
      <TouchableOpacity onPress={() => BiometricEnrollement()}>
        <View style={styles.ButtonConatiner}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <View></View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonConatiner: {
    width: 200,
    height: 38,
    backgroundColor: "#DF8F8F",
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
