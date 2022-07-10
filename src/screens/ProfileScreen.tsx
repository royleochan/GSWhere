import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, List } from "react-native-paper";

import useStore from "hooks/useStore";
import useChangeOrientation from "hooks/useChangeOrientation";
import request from "utils/request";

const ProfileScreen = () => {
  const [bookings, setBookings] = useState([]);
  const kerebos = useStore((state) => state.user);
  useChangeOrientation("portrait");

  useFocusEffect(() => {
    const fetchBookings = async () => {
      const response = await request.get(`/BookingTable/${kerebos}`);
      setBookings(response.data.Items);
    };
    fetchBookings();
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderContainer}>
        <Avatar.Icon size={52} icon="account" />
        <Text>charoy</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Bookings</Text>
      </View>
      <List.Section style={{ width: "100%" }}>
        {bookings.map((booking) => {
          return (
            <List.Item
              key={booking.id}
              title={`${booking.date} - ${booking.id}`}
              description={"Singapore MTA L16, Normal Desk"}
              left={() => <List.Icon icon="seat" />}
            />
          );
        })}
      </List.Section>
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
