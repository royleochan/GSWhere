import SelectDropdown from "react-native-select-dropdown";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
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
