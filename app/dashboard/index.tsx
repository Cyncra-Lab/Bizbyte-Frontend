import Header from "@/components/Header";
import InfoCards from "@/components/InfoCards";
import Navigation from "@/components/Navigation";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      name: "Peak Milk Sachet",
      unitsLeft: 12,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 2,
      name: "Tom Sachete",
      unitsLeft: 57,
      image: require("../../assets/images/tomImage.png"),
    },
    // {
    //   id: 3,
    //   name: "Tom Sachete",
    //   unitsLeft: 57,
    //   image: require("../../assets/images/tomImage.png"),
    // },
  ];

  return (
    <View className="flex-1 bg-[#FAFAFA] h-[100vh]">
      {/* Header */}
      <Header />

      {/* Greeting & Add Product */}
      <View className="flex-row justify-between items-center p-5">
        <View>
          <Text style={{ fontSize: 20, fontFamily: "Bold" }}>
            Hello, David Smith
          </Text>
          <Text style={{ color: "green", marginTop: 2, fontFamily: "Bold" }}>
            • Online
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/products/add-product" as never)}
          className="bg-[#6628EB] py-3 px-5 rounded-[8px] flex-row items-center justify-center gap-3"
        >
          <Image
            source={require("../../assets/images/addIcon.png")}
            className="h-[20px] w-[20px]"
          />
          <Text className="text-white text-[16px] font-medium">
            Add Product
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info Cards */}
      <InfoCards />

      {/* My Products */}
      <View className="flex-row justify-between items-center mb-[10px] px-5 py-[10px]">
        <Text className="text-xl font-medium">My Products</Text>
        <TouchableOpacity>
          <Text style={{ color: "#6628EB", fontFamily: "Bold", fontSize: 16 }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {data.map((item) => (
          <View
            key={item.id}
            className="flex-row items-center bg-white rounded-[10px] p-5 mx-5 my-[5px] shadow-md"
          >
            <Image
              source={item.image}
              className="w-[50px] h-[50px] mr-[15px] rounded-[5px]"
              style={{ resizeMode: "contain" }}
            />
            <View style={{ flex: 1 }}>
              <Text className="font-medium text-[16px]">{item.name}</Text>
              <Text className="text-[#555] text-regular">
                {item.unitsLeft} units left
              </Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#555" />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tabs */}
      <Navigation />
    </View>
  );
};

export default Index;
