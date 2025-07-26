import React, { useState, useEffect } from "react";
import { View, Animated, Text } from "react-native";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scaleAnim = useState(new Animated.Value(1))[0];
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading === false && count === 100) {
      const timer = setTimeout(() => {
        router.push("/onboarding" as never);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, count, router]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  const animateCount = () => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 30); // adjust speed here
  };

  useEffect(() => {
    animateCount();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#fff",
            marginTop: -25,
          }}
        >
          <Animated.Image
            source={require("../assets/images/icon.png")}
            style={{
              width: 300,
              height: 100,
              transform: [{ scale: scaleAnim }],
            }}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#6628EB",
            marginTop: -25,
          }}
        >
          <Animated.Image
            source={require("../assets/images/icon-white.png")}
            style={{
              width: 300,
              height: 100,
              transform: [{ scale: scaleAnim }],
            }}
          />
          <View style={{ position: "absolute", bottom: 25 }}>
            <Text style={{ fontSize: 32, fontFamily: "Bold", color: "white" }}>
              {count}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SplashScreen;
