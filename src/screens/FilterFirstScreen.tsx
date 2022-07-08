import SelectDropdown from "react-native-select-dropdown";
import MainButton from "components/MainButton";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-paper";

const { width } = Dimensions.get("window");

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
    navigation.navigate("FilterSecond");
  };

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <View>
        <Text style={styles.txt}>Region</Text>
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
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>

      {showSecondList ? (
        <View>
          <Text style={styles.txt}>Country</Text>
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
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
      ) : (
        <Text></Text>
      )}

      {showThirdList ? (
        <View>
          <Text style={styles.txt}>City</Text>
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
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
      ) : (
        <Text></Text>
      )}

      {showFourthList ? (
        <View>
          <Text style={styles.txt}>Building</Text>
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
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
      ) : (
        <Text></Text>
      )}
      <View style={{ width: 150, marginTop: 60 }}>
        <MainButton onPress={navigateToSecondFilter}>Submit</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: "#7D9CC0",
    paddingLeft: 0,
    paddingTop: 30,
    paddingBottom: 15,
  },
  hdr: {
    marginBottom: "30%",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { width },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#444", textAlign: "left" },
});
export default FilterFirstScreen;
