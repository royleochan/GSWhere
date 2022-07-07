import { View, Text } from "react-native";
import { useEffect } from "react";

import MainButton from "components/MainButton";

import { DataStore } from "@aws-amplify/datastore";
import { DeskDetails } from "../models";

const FilterFirstScreen = ({ navigation }) => {
  useEffect(() => {
    const query = async () => {
      const models = await DataStore.query(DeskDetails);
      console.log(models);
    };
    query();
  }, []);

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
