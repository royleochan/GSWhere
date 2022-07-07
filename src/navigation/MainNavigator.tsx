import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FilterFirstScreen from "screens/FilterFirstScreen";
import FilterSecondScreen from "screens/FilterSecondScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FilterFirst"
          options={{ title: "GSWhere" }}
          component={FilterFirstScreen}
        />
        <Stack.Screen
          name="FilterSecond"
          options={{ title: "GSWhere" }}
          component={FilterSecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
