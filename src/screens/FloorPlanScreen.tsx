import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Image } from "react-native";

import Seat from "components/Seat";
import useChangeOrientation from "hooks/useChangeOrientation";
import chunk from "utils/chunk.js";

const FloorPlanScreen = () => {
  useChangeOrientation("landscape");
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 26 }}>Maple Tree Anson - L16</Text>
      <View style={{ marginTop: 10 }}>
        <Image source={require("../../assets/office.png")} />
      </View>
      <View style={{ margin: 24 }}>
        {chunk(arr, 10).map((row, i) => {
          return (
            <View
              key={i}
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 5,
              }}
            >
              {row.map((_, i) => (
                <Seat key={i} />
              ))}
            </View>
          );
        })}
      </View>
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
