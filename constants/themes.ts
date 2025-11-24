/**
 * ResQMe Theme System
 * - Supports Light/Dark mode
 * - Brand colors & gradients
 * - Cross-platform fonts
 */

import { Platform } from "react-native";

export const BRAND_COLORS = {
  primary: "#5A4FF3",     // Start of gradient
  secondary: "#8B76FF",   // End of gradient
  accent: "#FF5F8F",      // Emergency accent (pink/red tone)
  success: "#4CAF50",
  danger: "#FF4D4D",
  warning: "#FFC107",
};

export const Colors = {
  light: {
    text: "#1A1A1A",
    background: "#FFFFFF",

    // Brand
    primary: BRAND_COLORS.primary,
    secondary: BRAND_COLORS.secondary,

    // UI
    card: "#FFFFFF",
    border: "#E5E5E5",

    tint: BRAND_COLORS.primary,
    icon: "#555",

    tabIconDefault: "#777",
    tabIconSelected: BRAND_COLORS.primary,
  },

  dark: {
    text: "#F5F5F5",
    background: "#0D0D0D",

    // Brand
    primary: BRAND_COLORS.primary,
    secondary: BRAND_COLORS.secondary,

    card: "#1A1A1A",
    border: "#333",

    tint: BRAND_COLORS.secondary,
    icon: "#AAA",

    tabIconDefault: "#888",
    tabIconSelected: BRAND_COLORS.secondary,
  },
};

/**
 * Fonts
 * We will later load these via expo-font
 */

export const Fonts = Platform.select({
  ios: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semibold: "Inter-SemiBold",
    bold: "Inter-Bold",
  },
  android: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semibold: "Inter-SemiBold",
    bold: "Inter-Bold",
  },
  web: {
    regular: "Inter, system-ui",
    medium: "Inter, system-ui",
    semibold: "Inter, system-ui",
    bold: "Inter, system-ui",
  },
});

/**
 * Global sizing
 */
export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  sm: 6,
  md: 12,
  lg: 20,
  full: 999,
};
