import { useState } from "react";
import { Image, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../utils/styles";
import { useFocusEffect } from "@react-navigation/native";
import Logo from "../components/Logo";

export function SplashScreen({ navigation }) {
  useFocusEffect(() => {
    //check if user has logged in before using firebase
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("MTBNavigation");
      } else {
        navigation.navigate("LoginScreen");
      }
    });
  });

  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator />
      <Text>Aguarde</Text>
    </View>
  );
}
