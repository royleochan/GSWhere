import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import * as React from "react";

import MainButton from "components/MainButton";
import useStore from "hooks/useStore";

const LoginScreen = () => {
  const login = useStore((state) => state.login);
  const [kerbos, setKerbos] = React.useState("");
  const [securID, setSecurID] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginBottom: 75,
        }}
      >
        <Image
          style={styles.goldmanImage}
          source={require("../../assets/GoldmanSachs.png")}
        />
      </View>
      <View style={{ width: "100%" }}>
        <TextInput
          mode="outlined"
          label="kerebos"
          placeholder="Type kerebos"
          onChangeText={setKerbos}
          right={<TextInput.Affix text="/10" />}
        />
        <TextInput
          mode="outlined"
          label="securID"
          placeholder="Type securID"
          onChangeText={setSecurID}
          right={<TextInput.Affix text="/12" />}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Admin login</Text>
        <Checkbox
          color="rgb(125, 156, 192)"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <MainButton onPress={login}>Login</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  goldmanImage: {
    width: 200,
    height: 200,
  },
  toggleRow: {
    padding: 45,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
    marginTop: 10,
  },
  label: {
    margin: 8,
  },
});

export default LoginScreen;
