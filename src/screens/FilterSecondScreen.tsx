import { View, Text } from "react-native";

import MainButton from "components/MainButton";
import useChangeToPortrait from "hooks/useChangeToPortrait";

const FilterSecondScreen = ({ navigation }) => {
  useChangeToPortrait();

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
