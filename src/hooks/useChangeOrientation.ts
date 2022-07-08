import { useFocusEffect } from "@react-navigation/native";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

const useChangeOrientation = (orientation) => {
  let result;
  if (orientation === "portrait") {
    result = OrientationLock.PORTRAIT_UP;
  } else if (orientation === "landscape") {
    result = OrientationLock.LANDSCAPE_RIGHT;
  } else {
    ("");
  }

  const changeScreenOrientation = async () => {
    await lockAsync(result);
  };

  useFocusEffect(() => {
    changeScreenOrientation();
  });
};

export default useChangeOrientation;
