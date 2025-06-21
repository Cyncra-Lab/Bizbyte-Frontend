import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const router = useRouter();

  return (
    <View
      style={{
        // flex: 1,
        padding: 20,
        // justifyContent: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      {/* Back Arrow and Title */}

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#6628EB" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginVertical: 20,
            width: "90%",
            fontFamily: "Bold",
          }}
        >
          Login
        </Text>
      </View>

      {/* Email Input */}
      <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>
        Email address
      </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="example@gmail.com"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 12,
          marginBottom: 15,
          fontFamily: "Regular",
        }}
      />
      

      {/* Password Input */}
      <Text style={{ marginBottom: 5, fontFamily: "Bold" }}>Password</Text>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          paddingHorizontal: 12,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={secureText}
          style={{ flex: 1, paddingVertical: 10, fontFamily: "Regular" }}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#6628EB",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
          marginBottom: 15,
        }}
        onPress={() => router.push("/dashboard" as never)}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Bold" }}>
          Login
        </Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text
          style={{
            color: "#6A0DAD",
            textAlign: "center",
            marginBottom: 30,
            fontFamily: "Regular",
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View style={{ position: "relative", top: 300, width: "100%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 15,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
          }}
        >
          <Ionicons
            name="logo-google"
            size={20}
            color="#DB4437"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontFamily: "Regular" }}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Continue with Apple */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            borderRadius: 5,
            padding: 15,
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="logo-apple"
            size={20}
            color="#fff"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#fff", fontFamily: "Regular" }}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <Text style={{ textAlign: "center", fontFamily: "Regular", fontSize: 16 }}>
          You don’t have an account?{" "}
          <TouchableOpacity onPress={() => router.push("/onboarding/signup")}>
            <Text style={{ color: "#6628EB", fontFamily: "Bold", fontSize: 16 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Continue with Google */}
    </View>
  );
};

export default Login;
