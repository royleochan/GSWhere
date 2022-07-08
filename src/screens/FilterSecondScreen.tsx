import { View, Text } from "react-native";

import MainButton from "components/MainButton";
import useChangeOrientation from "hooks/useChangeOrientation";

const FilterSecondScreen = ({ navigation }) => {
  useChangeOrientation("portrait");

  return (
    <View>
      <Text>FilterSecondScreen</Text>
      <MainButton onPress={() => navigation.navigate("FloorPlan")}>
        Next
      </MainButton>
    </View>
  );
};

export default FilterSecondScreen;
