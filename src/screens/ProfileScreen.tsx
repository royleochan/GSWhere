import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-paper";

import useChangeOrientation from "hooks/useChangeOrientation";

const ProfileScreen = () => {
  useChangeOrientation("portrait");

  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderContainer}>
        <Avatar.Icon size={52} icon="account" />
        <Text>charoy</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Bookings</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  profileHeaderContainer: {
    alignItems: "center",
  },
});
