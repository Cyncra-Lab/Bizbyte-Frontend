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
        <Text style={{ fontFamily: "Bold", fontSize: 18 }}>My Products</Text>
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

      {/* Bottom Tabs */}
      <Navigation />
    </View>
  );
};

export default Index;
