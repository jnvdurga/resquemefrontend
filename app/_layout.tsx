import React from "react";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const COLORS = {
  primary: "#1e3a4d",
  secondary: "#29b6f6",
  text: "#ffffff",
};

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: COLORS.primary, flex: 1 }}
    >
      <View style={styles.profileContainer}>
        {/* <View style={styles.avatar}> */}
          <Image
            source="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213811475/original/44a37de80a1869f2154c18b917557d3a46676fc4/make-a-cartoon-avtar-from-picture.jpg"
            style={styles.avatar}
          />
        {/* </View> */}
        <Text style={styles.profileName}>ResQMe User</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <DrawerItem
          label="User Info"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <AntDesign name="user" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/userinfo")}
        />

        <DrawerItem
          label="Notifications"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="notifications" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/notigication")}
        />

        <DrawerItem
          label="Safe Zone"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialCommunityIcons name="shield-home" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/safezone")}
        />

        <DrawerItem
          label="Emergency Contacts"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="contacts" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/emergency")}
        />

        <DrawerItem
          label="Caretakers"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="people" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/caretaker")}
        />

        <DrawerItem
          label="About Us"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="info" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/about")}
        />

        <DrawerItem
          label="Settings"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="settings" size={size} color={COLORS.secondary} />
          )}
          onPress={() => router.push("/settings")}
        />
      </View>

      <View style={styles.bottomSection}>
        <DrawerItem
          label="Logout"
          labelStyle={styles.labelStyle}
          icon={({ size }) => (
            <MaterialIcons name="logout" size={size} color="#ff4d4d" />
          )}
          onPress={() => router.push("/logout")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default function RootLayout() {
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
    >
      <Drawer>
        <Drawer.Screen name="(tab)" options={{ headerTitle: "Home" }} />
      </Drawer>
      
      <Drawer.Screen name="userinfo" />
      <Drawer.Screen name="notigication" />
      <Drawer.Screen name="safezone" />
      <Drawer.Screen name="emergency" />
      <Drawer.Screen name="caretaker" />
      <Drawer.Screen name="about" />
      <Drawer.Screen name="settings" />
      <Drawer.Screen name="logout" />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#25465a",
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    
    
  },
  labelStyle: {
    color: COLORS.text,
    fontWeight: "500",
  },
  avatar: {
    height: 150,
    width: 150,
    backgroundColor: "#25465a",
    borderRadius: 100,
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
  bottomSection: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "#25465a",
  },
});
