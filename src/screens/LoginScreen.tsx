import { View, Text } from "react-native";

import MainButton from "components/MainButton";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <MainButton onPress={() => navigation.navigate("GSWhere")}>
        Login
      </MainButton>
    </View>
  );
};

export default LoginScreen;
