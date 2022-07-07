import { View, Text } from "react-native";
import React from "react";

import MainButton from "components/MainButton";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <MainButton onPress={() => navigation.navigate("GSWhere")}>
        Login
      </MainButton>
    </View>
  );
};

export default Login;
