import { View, Text } from "react-native";

import MainButton from "components/MainButton";

const FilterFirstScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FilterFirstScreen</Text>
      <MainButton onPress={() => navigation.navigate("FilterSecond")}>
        Next
      </MainButton>
    </View>
  );
};

export default FilterFirstScreen;
