import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/onboarding/login" as never);
  };
  return (
    <SafeAreaView>
      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          source={require("../../assets/images/onboardingImage.png")}
          style={{ width: "100%", height: 500, borderRadius: 24 }}
        />
        <Image
          source={require("../../assets/images/indicatorIcon.png")}
          style={{ marginTop: 10, width: "16%", height: 7 }}
        />
      </View>

      <View style={{ alignItems: "center", marginHorizontal: 20 }}>
        <Text style={{ fontFamily: "Bold", color: "#6628EB", fontSize: 28 }}>
          Welcome to Bizbyte
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            color: "#858585",
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Lightweight app that helps small business track their stock, log daily
          sales, and get real-time low-stock alerts
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 70 }}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#6628EB",
              paddingVertical: 16,
              width: "100%",
              borderRadius: 8,
              alignItems: "center",
              // paddingHorizontal: 44,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontFamily: "Bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: "#6628EB", fontSize: 16, fontFamily: "Regular" }}
          >
            {`Don't have an account?`}
            <TouchableOpacity>
              <Text
                style={{
                  color: "#6628EB",
                  fontSize: 16,
                  fontFamily: "Bold",
                  marginLeft: 5,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
