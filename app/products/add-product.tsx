import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const AddProduct = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SubNav title="Add Product" />
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          //   backgroundColor: "#fff",
          flexGrow: 1,
          marginBottom: 50,
          flex: 1,
        }}
      >
        {/* Product Image Upload */}
        <Text style={{ marginBottom: 10, fontFamily: "Bold", fontSize: 16 }}>
          Product Image
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#6628EB",
            borderRadius: 10,
            padding: 20,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/images/uploadIcon.png")}
            style={{ width: 44, height: 44, marginBottom: 5 }}
          />
          <Text
            style={{
              color: "#6628EB",
              fontFamily: "Bold",
              marginBottom: 5,
              fontSize: 16,
            }}
          >
            Tap to upload image
          </Text>
          <Text
            style={{ color: "#6b7280", marginBottom: 10, fontFamily: "Bold" }}
          >
            PNG or JPG (max 5mb)
          </Text>
          <Text style={{ marginBottom: 10, fontFamily: "Bold" }}>OR</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#18CB96",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "Bold" }}>
              Take Photo
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, paddingBottom: 120, marginBottom: 20 }}>
          {/* Name of Product */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Name of Product
          </Text>
          <TextInput
            placeholder="Enter product name"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontFamily: "Regular",
            }}
          />

          {/* Category */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Category</Text>
          <TextInput
            placeholder="Select Category"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontFamily: "Regular",
            }}
          />

          {/* Price */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Price</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              marginBottom: 15,
            }}
          >
            <Text
              style={{ padding: 10, color: "#6b7280", fontFamily: "Regular" }}
            >
              NGN
            </Text>
            <TextInput
              placeholder="Enter Amount"
              style={{ flex: 1, padding: 10, fontFamily: "Regular" }}
              keyboardType="numeric"
            />
          </View>

          {/* Quantity */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Quantity</Text>
          <TextInput
            placeholder="Enter Quantity"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontFamily: "Regular",
            }}
          />

          {/* Low Stock Threshold */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Low Stock Threshold
          </Text>
          <TextInput
            placeholder="e.g., 5 units — triggers alert when reached"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontFamily: "Regular",
            }}
          />

          {/* Price (again?) */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Price</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              marginBottom: 15,
            }}
          >
            <Text
              style={{ padding: 10, color: "#6b7280", fontFamily: "Regular" }}
            >
              NGN
            </Text>
            <TextInput
              placeholder="Enter Amount"
              style={{ flex: 1, padding: 10, fontFamily: "Regular" }}
              keyboardType="numeric"
            />
          </View>

          {/* Description */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Description
          </Text>
          <TextInput
            placeholder="Enter description"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              padding: 10,
              marginBottom: 5,
              fontFamily: "Regular",
            }}
          />
          <Text
            style={{
              color: "#727849",
              fontSize: 12,
              marginBottom: 15,
              fontFamily: "Bold",
            }}
          >
            ⓘ This is optional
          </Text>
          {/* Product Code or SKU */}
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Product Code or SKU
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 5,
              marginBottom: 5,
              paddingVertical: 10,
            }}
          >
            <TextInput
              placeholder="Enter code here or auto generate"
              style={{ flex: 1, padding: 10, fontFamily: "Regular" }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#18CB96",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "Bold" }}>
                Auto generate
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#727849", fontSize: 12, fontFamily: "Bold" }}>
            ⓘ This is optional
          </Text>
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          backgroundColor: "#6628EB",
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => console.log("Product Added")}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Bold" }}>
          Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProduct;
