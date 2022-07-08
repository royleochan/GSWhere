import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterFirstScreen from "screens/FilterFirstScreen";
import FilterSecondScreen from "screens/FilterSecondScreen";
import FloorPlanScreen from "screens/FloorPlanScreen";

const Stack = createNativeStackNavigator();

const SeatNavigator = () => {
  return (
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
      <Stack.Screen
        name="FloorPlan"
        options={{ title: "GSWhere" }}
        component={FloorPlanScreen}
      />
    </Stack.Navigator>
  );
};

export default SeatNavigator;
