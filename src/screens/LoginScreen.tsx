import { View, Text } from "react-native";

import MainButton from "components/MainButton";
import useStore from "hooks/useStore";

const LoginScreen = () => {
  const login = useStore((state) => state.login);

  return (
    <View>
      <Text>Login Screen</Text>
      <MainButton onPress={login}>Login</MainButton>
    </View>
  );
};

export default LoginScreen;
