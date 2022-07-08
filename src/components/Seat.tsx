import { View, Text } from "react-native";
import { Badge } from "react-native-paper";

const Seat = () => {
  return (
    <View
      style={{
        width: 20,
      }}
    >
      <Badge size={30} style={{ backgroundColor: "blue" }}></Badge>
      <Text>Id</Text>
    </View>
  );
};

export default Seat;
