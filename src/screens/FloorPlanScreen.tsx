import moment from "moment";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Image } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import Seat from "components/Seat";
import useChangeOrientation from "hooks/useChangeOrientation";
import MainButton from "components/MainButton";
import chunk from "utils/chunk.js";
import { useState, useEffect } from "react";
import request from "utils/request";

const FloorPlanScreen = ({ navigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [desks, setDesks] = useState([]);
  useChangeOrientation("landscape");
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const handleClickSeat = (desk) => {
    setIsModalOpen(true);
    setSelectedDesk(desk);
  };

  const handleConfirm = async () => {
    await bookSeat();
    navigation.navigate("My Bookings");
  };

  const bookSeat = async () => {
    try {
      await request.put("/BookingTable", {
        id: selectedDesk.id,
        date: moment(Date.now()).format("YYYY-MM-DD"),
        desk: selectedDesk.id,
        kerberos: "charoy",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getDesks = async () => {
      const result = await request.get("/desks");
      const desks = await result.data.Items;
      setDesks(desks);
    };
    getDesks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 26 }}>Maple Tree Anson - L16</Text>
      <Provider>
        <Portal>
          <Modal
            visible={isModalOpen}
            onDismiss={() => setIsModalOpen(false)}
            contentContainerStyle={containerStyle}
          >
            {selectedDesk !== null && (
              <View>
                <Text>{`Desk id: ${selectedDesk.id}`}</Text>
                <Text>{`Desk type: ${selectedDesk["employee_type"]}`}</Text>
                <Text>{`Kerberos: ${selectedDesk.kerberos}`}</Text>
                <Text>{`Monitor Specs: ${selectedDesk["monitor_specs"]}`}</Text>
                <Text>{`Phone Type: ${selectedDesk["phone_type"]}`}</Text>
                {!selectedDesk["reservation_status"] && (
                  <MainButton onPress={handleConfirm}>
                    Confirm Booking
                  </MainButton>
                )}
              </View>
            )}
          </Modal>
        </Portal>
        <View style={{ marginTop: 10 }}>
          <Image source={require("../../assets/office.png")} />
        </View>
        <View style={{ margin: 24 }}>
          {chunk(desks, 5).map((row, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginVertical: 5,
                }}
              >
                {row.map((desk) => (
                  <Seat
                    key={desk.id}
                    name={desk.id}
                    isReserved={desk["reservation_status"]}
                    onPress={() => handleClickSeat(desk)}
                  />
                ))}
              </View>
            );
          })}
        </View>
      </Provider>
    </ScrollView>
  );
};

export default FloorPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
