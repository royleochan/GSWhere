import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "screens/MainScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GSWhere" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
