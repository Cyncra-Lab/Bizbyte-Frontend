import React from "react";
import { Image, View, Text } from "react-native";

const SubNav = ({ title }: { title: string }) => {
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
      <Image
        source={require("../assets/images/backIcon.png")}
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
          marginTop: 10,
          position: "absolute",
          left: 10,
        }}
      />
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
