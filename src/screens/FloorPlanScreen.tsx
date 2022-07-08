import { View, StyleSheet, Text } from "react-native";

import Seat from "components/Seat";
import Desk from "components/Desk";
import useChangeOrientation from "hooks/useChangeOrientation";

const FloorPlanScreen = () => {
  useChangeOrientation("landscape");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26 }}>Maple Tree Anson - L16</Text>
      <Seat />
      <Desk />
    </View>
  );
};

export default FloorPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
