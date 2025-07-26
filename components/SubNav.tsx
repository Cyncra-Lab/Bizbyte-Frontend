import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SubNav = ({ title }: { title: string }) => {
  const router = useRouter();
  const handleBackPress = () => {
    router.back();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
      }}
    >
      <TouchableOpacity
        style={{ marginTop: 10, position: "absolute", left: 10 }}
        onPress={handleBackPress}
      >
        <Image
          source={require("../assets/images/backIcon.png")}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "Bold",
          color: "#6628EB",
          marginTop: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SubNav;
