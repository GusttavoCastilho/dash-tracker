import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "@src/main";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Main />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
