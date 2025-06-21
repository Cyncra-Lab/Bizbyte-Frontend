import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "@/components/Navigation";

const Index = () => {
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
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      {/* Header */}
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingTop: 20,
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
          source={require("../../assets/images/dashboardLogo.png")}
          style={{ width: "25%", height: 35, resizeMode: "contain" }}
        />
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/notificationIcon.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/profileIcon.png")}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

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
          <Text style={{ fontSize: 20, fontFamily: "Bold" }}>
            Hello, David Smith
          </Text>
          <Text style={{ color: "green", marginTop: 2, fontFamily: "Bold" }}>
            • Online
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#6628EB",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 6,
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
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
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
              source={require("../../assets/images/soldIcon.png")}
              style={{
                width: 38,
                height: 38,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
              Items Sold Today
            </Text>
          </View>

          <Text style={{ fontFamily: "Bold", fontSize: 24 }}>25</Text>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            width: "48%",
            borderRadius: 20,
            padding: 20,
            marginBottom: 15,
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
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
              source={require("../../assets/images/soldIcon.png")}
              style={{
                width: 38,
                height: 38,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
              Total Stocks Left
            </Text>
          </View>
          <Text style={{ fontFamily: "Bold", fontSize: 24 }}>346</Text>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            width: "48%",
            borderRadius: 20,
            padding: 20,
            marginBottom: 15,
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
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
              source={require("../../assets/images/soldIcon.png")}
              style={{
                width: 38,
                height: 38,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
              Total Stocks Left
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
