import { View, Text } from "react-native";
import { lockAsync, OrientationLock } from "expo-screen-orientation";
import { useEffect } from "react";

const FloorPlanScreen = () => {
  const changeScreenOrientation = async () => {
    await lockAsync(OrientationLock.LANDSCAPE_RIGHT);
  };

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  return (
    <View>
      <Text>FloorPlan</Text>
    </View>
  );
};

export default FloorPlanScreen;
