import SafeScreen from "../components/SafeScreen.tsx";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar, Text } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot screenOptions={{ headerShown: false }} />
        
      </SafeScreen>

      <StatusBar style="dark"/>
    </ClerkProvider>
  );
}
