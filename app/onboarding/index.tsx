import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/onboarding/login" as never);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-5 items-center mt-3">
        <Image
          source={require("../../assets/images/onboardingImage.png")}
          className="w-full h-[500px] rounded-3xl"
          resizeMode="cover"
        />
        <Image
          source={require("../../assets/images/indicatorIcon.png")}
          className="mt-2.5 w-[16%] h-[7px]"
          resizeMode="contain"
        />
      </View>

      <View className="items-center mx-5 mt-4">
        <Text className="text-3xl text-[#6628EB] font-medium">
          Welcome to Bizbyte
        </Text>
        <Text className="text-center text-lg text-[#858585] mt-2 font-regular">
          Lightweight app that helps small business track their stock, log daily
          sales, and get real-time low-stock alerts
        </Text>
      </View>

      <View className="mx-5 mt-16">
        <View className="items-center w-full">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-[#6628EB] py-4 w-full rounded-lg items-center"
          >
            <Text className="text-white text-xl font-medium">Login</Text>
          </TouchableOpacity>
        </View>

        <View className="w-full items-center mt-5">
          <View className="flex-row">
            <Text className="text-[#6628EB] text-lg font-regular">
              {` Don't have an account?`}
            </Text>
            <TouchableOpacity>
              <Text className="text-[#6628EB] text-lg font-medium ml-1">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
