import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      
      {/* TOP USER SECTION */}
      <View style={styles.userSection}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.avatar}
        />
        <Text style={styles.email}>hello@example.com</Text>
        <Ionicons name="chevron-down" size={18} color="#fff" />
      </View>

      {/* MENU ITEMS */}
      <View style={styles.menu}>
        
        <MenuItem icon="home-outline" label="Home" onPress={() => props.navigation.navigate("(tab)")}/>
        <MenuItem icon="mail-outline" label="Inbox" />
        <MenuItem icon="trash-outline" label="Trash" />
        <MenuItem icon="alert-circle-outline" label="Spam" />
        <MenuItem icon="chatbubbles-outline" label="Forums" />
        <MenuItem icon="sync-outline" label="Updates" />
        <MenuItem icon="pricetag-outline" label="Promos" />
        <MenuItem icon="cart-outline" label="Purchases" />

      </View>

    </DrawerContentScrollView>
  );
}

/* MENU ITEM COMPONENT */
function MenuItem({ icon, label, onPress = () => {} }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#fff" />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
}

/* STYLING */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e3a4d",
    flex: 1,
    paddingTop: 30,
  },
  userSection: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10,
  },
  email: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 15,
  },
});
