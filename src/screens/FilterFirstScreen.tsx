import SelectDropdown from "react-native-select-dropdown";
import MainButton from "components/MainButton";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

const region = ["AsiaPacific", "Europe", "Americas"];

const countryDict = {
  AsiaPacific: ["Singapore", "Japan"],
  Europe: ["Germany", "UK", "Italy"],
  Americas: ["USA", "Mexico", "Brazil"],
};

const cityDict = {
  Singapore: ["Singapore"],
  Japan: ["Tokyo", "Osaka"],
  Germany: ["Munich", "Berlin"],
  UK: ["London", "Manchester"],
  Italy: ["Rome"],
  USA: ["New York", "California"],
  Mexico: ["Mexico City"],
  Brazil: ["Brasilia"],
};

const buildingDict = {
  Singapore: ["RFL", "Anson"],
};

let countryList = [];
let cityList = [];
let buildingList = [];

const FilterFirstScreen = ({ navigation }) => {
  const [showSecondList, setSecondList] = React.useState(false);
  const [showThirdList, setThirdList] = React.useState(false);
  const [showFourthList, setFourthList] = React.useState(false);

  const navigateToSecondFilter = () => {
    navigation.navigate("FilterSecond")
  }

  return (
    <View>
      <Text>FilterFirstScreen</Text>
      <SelectDropdown
        data={region}
        onSelect={(selectedItem) => {
          setSecondList((s) => !s);
          countryList = countryDict[selectedItem];
          cityList = [];
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      {showSecondList ? (
        <SelectDropdown
          data={countryList}
          onSelect={(selectedItem) => {
            setThirdList((s) => !s);
            cityList = cityDict[selectedItem];
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      ) : (
        <Text></Text>
      )}

      {showThirdList ? (
        <SelectDropdown
          data={cityList}
          onSelect={(selectedItem, index) => {
            setFourthList((s) => !s);
            buildingList = buildingDict[selectedItem];
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      ) : (
        <Text></Text>
      )}

      {showFourthList ? (
        <SelectDropdown
          data={buildingList}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      ) : (
        <Text></Text>
      )}
      <MainButton onPress={navigateToSecondFilter}>Submit</MainButton>
    </View>
  );
};

export default FilterFirstScreen;
