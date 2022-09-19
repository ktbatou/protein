import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

const HardwareCompatbility = () => {
  console.log("test");
  LocalAuthentication.hasHardwareAsync().then((value) => {
    if (!value) {
      console.log("failed");
      Alert.alert(
        "failed",
        "This device is not compatible for biometric authentication"
      );
    } else {
      console.log("success");
      BiometricEnrollement();
    }
  });
};

const BiometricEnrollement = () => {
  LocalAuthentication.isEnrolledAsync()
    .then((value) => {
      if (!value) {
        Alert.alert(
          "failed",
          "This device doesn't have biometric authentication enrolled"
        );
      } else {
        console.log("success 2");
        authentication();
      }
    })
    .catch((error) => {
      console.log("error");
      Alert.alert("errot", error.message);
    });
};

const authentication = () => {
  LocalAuthentication.authenticateAsync().then((result) => {
    if (!result.success) {
      Alert.alert("Authentication failed", result.error);
    } else Alert.alert("Authentication succeed", "successfully authenticated");
  });
};

export { HardwareCompatbility, BiometricEnrollement };
