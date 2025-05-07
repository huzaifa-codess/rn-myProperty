import React, { useEffect } from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Sizes, Fonts } from "../constant/styles";
import { CircleFade } from "react-native-animated-spinkit";
import { useNavigation } from "expo-router";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.push("auth/loginScreen");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="light-content"
      />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/GlobalZamindarSplashScreen.png")}
        resizeMode="stretch"
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["black", "rgba(0,0.10,0,0.77)", "rgba(0,0,0,0.1)"]}
          style={styles.pageStyle}
        >
          <Text style={{ ...Fonts.whiteColor36Medium }}>Global Zamindar</Text>
          <CircleFade
            size={50}
            color={Colors.whiteColor}
            style={{ position: "absolute", bottom: 40.0 }}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
