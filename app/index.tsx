import SplashScreen from "@/components/SplashScreen";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import "./global.css";

const index = () => {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <SplashScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default index;
