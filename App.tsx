import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import useStore from "hooks/useStore";
import LoginScreen from "screens/LoginScreen";
import MainNavigator from "navigation/MainNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#11294D",
    accent: "yellow",
  },
};

export default function App() {
  Amplify.configure(awsconfig);
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <PaperProvider theme={theme}>
      {!isAuthenticated ? <LoginScreen /> : <MainNavigator />}
    </PaperProvider>
  );
}
