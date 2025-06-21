import React from "react";
import { Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter, usePathname } from "expo-router";

const Navigation = () => {
  const router = useRouter();

  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.startsWith("/dashboard")) return "Dashboard";
    if (pathname.startsWith("/products")) return "Products";
    if (pathname.startsWith("/log-sales")) return "Log";
    if (pathname.startsWith("/sales-report")) return "Reports";
    return "";
  };

  const activeTab = getActiveTab();

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case "Dashboard":
        router.push("/dashboard");
        break;
      case "Log":
        router.push("/log-sales");
        break;
      case "Products":
        router.push("/products");
        break;
      case "Reports":
        router.push("/sales-report");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 25,
        borderRadius: 24,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 4,
      }}
    >
      <TouchableOpacity
        onPress={() => handleTabPress("Dashboard")}
        style={{ alignItems: "center" }}
      >
        <Image
          source={
            activeTab === "Dashboard"
              ? require("../assets/images/dashboardIconActive.png")
              : require("../assets/images/dashboardIcon.png")
          }
          style={{ width: 24, height: 24, marginBottom: 5 }}
        />

        <Text
          style={
            activeTab === "Dashboard"
              ? { fontSize: 14, color: "#6628EB", fontFamily: "Bold" }
              : { fontSize: 14, fontFamily: "Bold", color: "#858585" }
          }
        >
          Dashboard
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress("Products")}
        style={{ alignItems: "center" }}
      >
        <Image
          source={
            activeTab === "Products"
              ? require("../assets/images/productsIconActive.png")
              : require("../assets/images/productsIcon.png")
          }
          style={{ width: 24, height: 24, marginBottom: 5 }}
        />
        <Text
          style={
            activeTab === "Products"
              ? { fontSize: 14, color: "#6628EB", fontFamily: "Bold" }
              : { fontSize: 14, fontFamily: "Bold", color: "#858585" }
          }
        >
          Products
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress("Log")}
        style={{ alignItems: "center" }}
      >
        <Image
          source={
            activeTab === "Log"
              ? require("../assets/images/logIconActive.png")
              : require("../assets/images/logIcon.png")
          }
          style={{ width: 24, height: 24, marginBottom: 5 }}
        />
        <Text
          style={
            activeTab === "Log"
              ? { fontSize: 14, color: "#6628EB", fontFamily: "Bold" }
              : { fontSize: 14, fontFamily: "Bold", color: "#858585" }
          }
        >
          Log Sales
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress("Reports")}
        style={{ alignItems: "center" }}
      >
        <Image
          source={
            activeTab === "Reports"
              ? require("../assets/images/reportIconActive.png")
              : require("../assets/images/reportIcon.png")
          }
          style={{ width: 24, height: 24, marginBottom: 5 }}
        />
        <Text
          style={
            activeTab === "Reports"
              ? { fontSize: 14, color: "#6628EB", fontFamily: "Bold" }
              : { fontSize: 14, fontFamily: "Bold", color: "#858585" }
          }
        >
          Reports
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navigation;
