import { View, Text, TouchableOpacity } from "react-native";
import { Badge } from "react-native-paper";

const Seat = ({ name, isReserved, onPress }) => {
  return (
    <View
      style={{
        width: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Badge
          size={30}
          style={{ backgroundColor: isReserved ? "red" : "blue" }}
        ></Badge>
      </TouchableOpacity>
      <Text style={{ width: 50 }}>{name}</Text>
    </View>
  );
};

export default Seat;
