import { useRouter } from "expo-router";
import React from "react";
import {
  //   Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

const Header = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-row justify-between items-center bg-white px-5 pt-[55px] pb-[15px] shadow-lg">
      <Image
        source={require("../assets/images/dashboardLogo.png")}
        className="h-[35px] w-[25%] mask-contain"
      />
      <View className="flex-row items-center gap-5">
        <TouchableOpacity
          onPress={() => router.push("/notifications" as never)}
        >
          <Image
            source={require("../assets/images/notificationIcon.png")}
            className="h-[24px] w-[24px]"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/profileIcon.png")}
            className="h-[28px] w-[28px]"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
