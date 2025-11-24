import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const COLORS = {
  primary: "#1e3a4d",
  secondary: "#29b6f6",
  background: "#14212b",
  text: "#ffffff",
};

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: COLORS.primary, flex: 1 }}
    >
      {/* PROFILE HEADER */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <AntDesign name="user" size={40} color={COLORS.text} />
        </View>
        <Text style={styles.profileName}>ResQMe User</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>

      <View style={styles.menuContainer}>

        {/* USER INFO */}
        <DrawerItem
          label="User Info"
          labelStyle={styles.labelStyle}
          icon={({ color, size }) => (
            <AntDesign name="user" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("userInfo")}
          style={styles.drawerItem}
        />

        {/* NOTIFICATIONS */}
        <DrawerItem
          label="Notifications"
          labelStyle={styles.labelStyle}
          icon={({ color, size }) => (
            <MaterialIcons name="notifications" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("notifications")}
          style={styles.drawerItem}
        />

        {/* SAFE ZONE */}
        <DrawerItem
          label="Safe Zone"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialCommunityIcons name="shield-home" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("safeZone")}
          style={styles.drawerItem}
        />

        {/* EMERGENCY CONTACTS */}
        <DrawerItem
          label="Emergency Contacts"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="contacts" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("emergencyContacts")}
          style={styles.drawerItem}
        />

        {/* CARETAKERS */}
        <DrawerItem
          label="Caretakers"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="people" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("caretakers")}
          style={styles.drawerItem}
        />

        {/* ABOUT US */}
        <DrawerItem
          label="About Us"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="info" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("about")}
          style={styles.drawerItem}
        />

        {/* SETTINGS */}
        <DrawerItem
          label="Settings"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="settings" size={size} color={COLORS.secondary} />
          )}
          onPress={() => props.navigation.navigate("settings")}
          style={styles.drawerItem}
        />

      </View>

      {/* LOGOUT (BOTTOM) */}
      <View style={styles.bottomSection}>
        <DrawerItem
          label="Logout"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="logout" size={size} color="#ff4d4d" />
          )}
          onPress={() => props.navigation.navigate("logout")}
          style={styles.drawerItem}
        />
      </View>

    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: COLORS.primary,
          width: 260,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: "#25465a",
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: "#25465a",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileName: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "600",
  },
  profileEmail: {
    color: "#9bb6c7",
    fontSize: 12,
  },
  menuContainer: {
    paddingTop: 10,
  },
  drawerItem: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 2,
  },
  labelStyle: {
    color: COLORS.text,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "600",
  },
  bottomSection: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "#25465a",
  },
});
