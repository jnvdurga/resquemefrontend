import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Shield } from "lucide-react-native";
import { Colors, SIZES } from "../constants/themes";

export default function WelcomeLoader() {
  const bgOpacity = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(bgOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),

      Animated.spring(iconScale, {
        toValue: 1,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),

      Animated.timing(titleOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),

      Animated.timing(subtitleOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, opacity: bgOpacity }}>
      <LinearGradient
        colors={[Colors.light.primary, Colors.light.secondary]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        {/* === GLOW BEHIND EVERYTHING === */}
        <Animated.View
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: 300,
            backgroundColor: "rgba(255,255,255,0.10)",
            top: "35%",
            transform: [{ scale: iconScale }],
            // blurRadius: 60,
          }}
        />

        {/* Shield Icon */}
        <Animated.View
          style={{
            transform: [{ scale: iconScale }],
            marginBottom: 20,
            zIndex: 2,
          }}
        >
          <Shield size={74} color="white" strokeWidth={1.5} />
        </Animated.View>

        {/* App Name */}
        <Animated.Text
          style={{
            color: "white",
            fontSize: 42,
            fontWeight: "700",
            opacity: titleOpacity,
            marginBottom: SIZES.md,
            letterSpacing: 1,
            zIndex: 2,
          }}
        >
          ResQMe
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          style={{
            color: "white",
            opacity: subtitleOpacity,
            fontSize: 18,
            textAlign: "center",
            fontWeight: "400",
            lineHeight: 26,
            zIndex: 2,
          }}
        >
          Your safety, {"\n"}
          always connected.
        </Animated.Text>
      </LinearGradient>
    </Animated.View>
  );
}
