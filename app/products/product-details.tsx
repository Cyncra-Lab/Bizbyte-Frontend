import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SubNav from "@/components/SubNav";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductDetails = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <Header />
      <SubNav title="Product Details" />
      <View
        style={{
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Bold",
            width: "100%",
            marginBottom: 10,
          }}
        >
          Peak Sachet Milk
        </Text>
        <Image
          source={require("../../assets/images/peakImage.png")}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
        <View
          style={{
            marginTop: 10,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold", marginTop: 10 }}>
              Peak Sachet Milk
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              12 units left
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 18, fontFamily: "Bold", marginTop: 10 }}>
              NGN 1,200
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              Price
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold", marginTop: 10 }}>
              Beverage
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              Category
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 18, fontFamily: "Bold", marginTop: 10 }}>
              S84GF9SK
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              SKU
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold", marginTop: 10 }}>
              12 Oct, 2022
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              Date Added
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Bold",
                marginTop: 10,
                color: "#18CB96",
              }}
            >
              In Stock
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              Status
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold", marginTop: 10 }}>
              Peak Milk Sachet 10 sachet in a row
            </Text>
            <Text
              style={{ color: "#9A9A9A", marginTop: 5, fontFamily: "Regular" }}
            >
              Description
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "48%" }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 5,
                borderColor: "#AF1610",
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                width: "100%",
              }}
            >
              <Image
                source={require("../../assets/images/deleteIcon.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Bold",
                  color: "#AF1610",
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "flex-end", width: "48%" }}>
            <TouchableOpacity
              className="bg-red-500 px-50"
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 5,
                borderColor: "#E69500",
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                width: "100%",
              }}
            >
              <Image
                source={require("../../assets/images/editIcon.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Bold",
                  color: "#E69500",
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
              Welcome to Nativewind!
            </Text>
          </View>
        </View>
      </View>

      <Navigation />
    </View>
  );
};

export default ProductDetails;
