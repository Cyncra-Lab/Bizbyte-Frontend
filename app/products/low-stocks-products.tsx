import Header from "@/components/Header";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SubNav from "@/components/SubNav";

const LowStoksProducts = () => {
  const data = [
    {
      id: 1,
      name: "Peak Milk Sachet",
      unitsLeft: 2,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 2,
      name: "Tom Sachete",
      unitsLeft: 5,
      image: require("../../assets/images/tomImage.png"),
    },
    {
      id: 3,
      name: "Tom Sachete",
      unitsLeft: 5,
      image: require("../../assets/images/tomImage.png"),
    },
    {
      id: 4,
      name: "Peak Milk Sachet",
      unitsLeft: 2,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 5,
      name: "Peak Milk Sachet",
      unitsLeft: 2,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 6,
      name: "Tom Sachete",
      unitsLeft: 7,
      image: require("../../assets/images/tomImage.png"),
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <Header />
      <SubNav title="Low Stocks Products" />

      <Text
        style={{
          color: "#9A9A9A",
          fontFamily: "Bold",
          alignItems: "center",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Products with less than 15 units left
      </Text>

      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            color: "#000",
            fontFamily: "Bold",
            alignItems: "center",
            fontSize: 20,
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        >
          Products
        </Text>
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
              marginVertical: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                marginRight: 15,
                borderRadius: 5,
                resizeMode: "contain",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.name}
              </Text>
              <Text style={{ color: "#555", fontSize: 14 }}>
                {item.unitsLeft} units left
              </Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#555" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LowStoksProducts;
