import React from "react";
import {
  View,
  //   Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import { useRouter } from "expo-router";

const Header = () => {
  //   const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 55,
        paddingBottom: 15,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 4,
      }}
    >
      <Image
        source={require("../assets/images/dashboardLogo.png")}
        style={{ width: "25%", height: 35, resizeMode: "contain" }}
      />
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/notificationIcon.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/profileIcon.png")}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
