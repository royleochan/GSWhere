import { View, Text } from "react-native";
import React from "react";

import { Button } from "react-native-paper";

const MainButton = ({ onPress, children }) => {
  return (
    <Button mode="contained" onPress={onPress}>
      {children}
    </Button>
  );
};

export default MainButton;
