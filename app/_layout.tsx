
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";


export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Regular: require("../assets/fonts/HeroLight-Regular.otf"),
    Light: require("../assets/fonts/HeroLight-Light.otf"),
    Bold: require("../assets/fonts/HeroLight-Bold.otf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="log-sales" options={{ headerShown: false }} />
      <Stack.Screen name="products" options={{ headerShown: false }} />
      <Stack.Screen name="sales-report" options={{ headerShown: false }} />
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
