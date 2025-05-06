import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AppState, StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });
    return () => {
      subscription.remove();
    };
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="auth/loginScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="auth/verificationScreen" />
      <Stack.Screen
        name="auth/registerScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
      <Stack.Screen name="search/searchScreen" />
      <Stack.Screen name="notification/notificationScreen" />
      <Stack.Screen name="property/propertyScreen" />
      <Stack.Screen name="imageFullView/imageFullViewScreen" />
      <Stack.Screen name="message/messageScreen" />
      <Stack.Screen name="editProfile/editProfileScreen" />
      <Stack.Screen name="addNewListing/addNewListingScreen" />
      <Stack.Screen name="myListing/myListingScreen" />
      <Stack.Screen name="privacyPolicy/privacyPolicyScreen" />
      <Stack.Screen name="termsOfUse/termsOfUseScreen" />
      <Stack.Screen name="support/supportScreen" />
    </Stack>
  );
}
