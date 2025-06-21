import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

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
    {
      id: 3,
      name: "Tom Sachete",
      unitsLeft: 57,
      image: require("../../assets/images/tomImage.png"),
    },
    {
      id: 4,
      name: "Peak Milk Sachet",
      unitsLeft: 12,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 5,
      name: "Peak Milk Sachet",
      unitsLeft: 12,
      image: require("../../assets/images/peakImage.png"),
    },
    {
      id: 6,
      name: "Tom Sachete",
      unitsLeft: 57,
      image: require("../../assets/images/tomImage.png"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      {/* Header */}
      <Header />

      {/* Greeting & Add Product */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
          padding: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontFamily: "Bold" }}>All Products</Text>
          <Text style={{ color: "green", marginTop: 2, fontFamily: "Regular" }}>
            • Add products to category
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/products/add-product" as never)}
          style={{
            backgroundColor: "#6628EB",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            display: "flex",
            gap: 5,
          }}
        >
          <Image
            source={require("../../assets/images/addIcon.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
          <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 16 }}>
            Add Product
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info Cards */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#6628EB",
            width: "48%",
            borderRadius: 20,
            padding: 20,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              gap: 10,
            }}
          >
            <Image
              source={require("../../assets/images/growIcon.png")}
              style={{
                width: 38,
                height: 38,
                marginBottom: 10,
              }}
            />
            <Text
              style={{ color: "#D0D9E2", fontFamily: "Bold", fontSize: 16 }}
            >
              Total Sales Today
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Bold",
            }}
          >
            ₦15,230
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            width: "48%",
            borderRadius: 20,
            padding: 20,
            marginBottom: 15,
            // Shadow for iOS
            shadowColor: "#3326AE", // 8% opacity
            shadowOffset: { width: 0, height: 8.67 },
            shadowOpacity: 0.08,
            shadowRadius: 17.24,
            // Shadow for Android
            elevation: 4,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              gap: 10,
            }}
          >
            <Image
              source={require("../../assets/images/lowIcon.png")}
              style={{
                width: 38,
                height: 38,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
              Low-Stock Product
            </Text>
          </View>

          <Text style={{ fontFamily: "Bold", fontSize: 24, color: "#E69500" }}>
            25
          </Text>
        </View>
      </View>

      {/* My Products */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontFamily: "Bold", fontSize: 18 }}>
            Products - <Text style={{ color: "#6628EB" }}>346</Text>
          </Text>
          <Text style={{ fontFamily: "Bold", fontSize: 16, color: "#18CB96" }}>
            View All
          </Text>
        </View>
        <View>
          <TextInput
            //  value={email}
            //  onChangeText={setEmail}
            placeholder="Search Stocks"
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 12,
              fontFamily: "Regular",
              width: 200,
            }}
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1, marginBottom: 70 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          {data.map((item) => (
            <TouchableOpacity
              onPress={() => router.push("/products/product-details" as never)}
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                gap: 10,
                padding: 15,
                width: "48%", // Two cards per row
                marginBottom: 15,
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
              <Image
                source={require("../../assets/images/arrowRightIcon.png")}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft: "auto",
                  marginTop: -10,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      <Navigation />
    </View>
  );
};

export default Index;
