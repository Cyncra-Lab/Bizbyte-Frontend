import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For back and bell icon

const NotificationsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#6628EB" />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Bold",
            fontSize: 18,
          }}
        >
          Notifications
        </Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#6628EB" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Latest Sales */}
        <Text style={{ fontFamily: "Bold", marginBottom: 10 }}>
          Latest Sales
        </Text>

        <View
          style={{
            backgroundColor: "#F5F3FF",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold" }}>New Sale Recorded</Text>
            <Text style={{ color: "#6b7280" }}>5 min ago</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#6b7280" }}>
            A new order for “Eco-Friendly Tote Bags” has been placed.
            Check it out now!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F5F3FF",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold" }}>Sales Reminder</Text>
            <Text style={{ color: "#6b7280" }}>15 min ago</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#6b7280" }}>
            Weekly Flash Sale starts at 9:00 AM. Don’t miss out on amazing deals!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F5F3FF",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold" }}>Admin Update</Text>
            <Text style={{ color: "#6b7280" }}>20 min ago</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#6b7280" }}>
            Inventory restock scheduled for Tuesday — ensure your bestsellers are ready.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F5F3FF",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold" }}>Promotion Alert</Text>
            <Text style={{ color: "#6b7280" }}>5 min ago</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#6b7280" }}>
            Celebrate our anniversary with us! Enjoy 20% off on all items today! 🎉
          </Text>
        </View>

        {/* Previous Sales */}
        <Text style={{ fontFamily: "Bold", marginBottom: 10 }}>
          Previous Sales
        </Text>

        <View
          style={{
            backgroundColor: "#F9FAFB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold", color: "#9CA3AF" }}>
              Top Selling Products This Month
            </Text>
            <Text style={{ color: "#9CA3AF" }}>20/07/25</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#9CA3AF" }}>
            “Reusable Water Bottles” have sold 1,200 units this month. Join the trend!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F9FAFB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold", color: "#9CA3AF" }}>
              Admin Update
            </Text>
            <Text style={{ color: "#9CA3AF" }}>19/07/25</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#9CA3AF" }}>
            Thank you to all our customers for their continued support!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F9FAFB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold", color: "#9CA3AF" }}>
              New Comment on Your Post
            </Text>
            <Text style={{ color: "#9CA3AF" }}>18/07/25</Text>
          </View>
          <Text style={{ marginTop: 5, color: "#9CA3AF" }}>
            Alex M. commented on your post about “Sustainable Fashion Trends.”
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F9FAFB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Bold", color: "#9CA3AF" }}>
              Promotion Alert
            </Text>
            <Text style={{ color: "#9CA3AF" }}>15/07/25</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
