import Header from "@/components/Header";
import AddProductBottomSheet from "@/components/Modals/AddProductBottomSheet";
import SubNav from "@/components/SubNav";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AddProduct = () => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      <SubNav title="Add Product" />
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          flexGrow: 1,
          marginBottom: 50,
          flex: 1,
        }}
      >
        <Text style={{ marginBottom: 10, fontFamily: "Bold", fontSize: 16 }}>
          Product Image
        </Text>
        <View className="border border-dashed border-[#6628EB] rounded-[12px] bg-white p-6 items-center mb-[20px]">
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
          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Name of Product
          </Text>
          <TextInput
            placeholder="Enter product name"
            className="border bg-white border-[#d1d5db] rounded-[8px] px-4 py-4 mb-4 font-regular"
          />

          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Category</Text>
          <TextInput
            placeholder="Select Category"
            className="border bg-white border-[#d1d5db] rounded-[8px] px-4 py-4 mb-4 font-regular"
          />

          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Price</Text>
          <View className="border flex-row items-center bg-white border-[#d1d5db] rounded-[8px] px-4 py-1 mb-4 font-regular">
            <Text className="font-medium text-lg">NGN |</Text>
            <TextInput
              placeholder="Enter Amount"
              className="w-[80%] font-regular"
              keyboardType="numeric"
            />
          </View>

          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Quantity</Text>
          <TextInput
            placeholder="Enter Quantity"
            className="border bg-white border-[#d1d5db] rounded-[8px] px-4 py-4 mb-4 font-regular"
          />

          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Low Stock Threshold
          </Text>
          <TextInput
            placeholder="e.g., 5 units — triggers alert when reached"
            className="border bg-white border-[#d1d5db] rounded-[8px] px-4 py-4 mb-4 font-regular"
          />

          <Text className="text-[16px] mb-[5px] font-medium">Description</Text>
          <TextInput
            placeholder="Enter description"
            className="border bg-white border-[#d1d5db] rounded-[8px] px-4 py-4 mb-1 font-regular"
          />
          <Text className="text-[#727849] text-[14px] mb-[15px] font-medium">
            ⓘ This is optional
          </Text>

          <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
            Product Code or SKU
          </Text>
          <View className="flex-row bg-white items-center border border-[#d1d5db] rounded-[8px] mb-[5px] py-[10px]">
            <TextInput
              placeholder="Enter code here or auto generate"
              style={{ flex: 1, padding: 10, fontFamily: "Regular" }}
            />
            <TouchableOpacity className="bg-[#18CB96] px-4 py-3 rounded-[4px] mr-[10px]">
              <Text style={{ color: "#fff", fontFamily: "Bold" }}>
                Auto generate
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[#727849] text-[14px] mb-4 font-medium">
            ⓘ This is optional
          </Text>
        </ScrollView>
      </ScrollView>

      <AddProductBottomSheet
        visible={showSheet}
        onClose={() => setShowSheet(false)}
        onConfirm={() => {
          console.log("Product added");
          setShowSheet(false);
        }}
      />

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
        onPress={() => setShowSheet(true)}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Bold" }}>
          Add Product
        </Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default AddProduct;
