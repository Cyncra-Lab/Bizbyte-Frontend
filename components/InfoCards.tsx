import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const cardsData = [
  {
    key: "sales",
    bg: "#6628EB",
    textColor: "#fff",
    icon: require("../assets/images/growIcon.png"),
    label: "Total Sales Today",
    value: "₦15,230",
    valueColor: "#fff",
    isButton: false,
  },
  {
    key: "sold",
    bg: "#fff",
    textColor: "#222",
    icon: require("../assets/images/soldIcon.png"),
    label: "Items Sold Today",
    value: "25",
    valueColor: "#222",
    isButton: false,
    shadow: true,
  },
  {
    key: "stocks",
    bg: "#fff",
    textColor: "#222",
    icon: require("../assets/images/stocksIcon.png"),
    label: "Total Stocks Left",
    value: "346",
    valueColor: "#222",
    isButton: false,
    shadow: true,
  },
  {
    key: "low",
    bg: "#fff",
    textColor: "#222",
    icon: require("../assets/images/lowIcon.png"),
    label: "Low-Stock Product",
    value: "25",
    valueColor: "#E69500",
    isButton: true,
    shadow: true,
    route: "/products/low-stocks-products",
  },
];

const InfoCards = () => {
  const router = useRouter();

  return (
    <View className="flex-row flex-wrap justify-between items-center mx-5">
      {cardsData.map((card) => {
        const CardWrapper = card.isButton ? TouchableOpacity : View;
        return (
          <CardWrapper
            key={card.key}
            onPress={
              card.isButton && card.route
                ? () => router.push(card.route as never)
                : undefined
            }
            style={{
              backgroundColor: card.bg,
              width: "48%",
              borderRadius: 20,
              padding: 20,
              marginBottom: 15,
              ...(card.shadow
                ? {
                    shadowColor: "#3326AE",
                    shadowOffset: { width: 0, height: 8.67 },
                    shadowOpacity: 0.08,
                    shadowRadius: 17.24,
                    elevation: 4,
                  }
                : {}),
            }}
          >
            <View style={{ marginBottom: 10, gap: 10 }}>
              <Image
                source={card.icon}
                style={{
                  width: 38,
                  height: 38,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  color: card.key === "sales" ? "#D0D9E2" : "#222",
                  fontFamily: "Bold",
                  fontSize: 16,
                }}
              >
                {card.label}
              </Text>
            </View>
            <Text
              style={{
                color: card.valueColor,
                fontFamily: "Bold",
                fontSize: 24,
              }}
            >
              {card.value}
            </Text>
          </CardWrapper>
        );
      })}
    </View>
  );
};

export default InfoCards;
