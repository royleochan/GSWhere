import { useFocusEffect } from "@react-navigation/native";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

const useChangeToPortrait = () => {
  const changeScreenOrientation = async () => {
    await lockAsync(OrientationLock.PORTRAIT_UP);
  };

  useFocusEffect(() => {
    changeScreenOrientation();
  });
};

export default useChangeToPortrait;
