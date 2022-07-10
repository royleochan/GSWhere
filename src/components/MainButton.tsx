import { Button } from "react-native-paper";

const MainButton = ({ onPress, children }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={{ backgroundColor: "#11294D", marginTop: 3 }}
    >
      {children}
    </Button>
  );
};

export default MainButton;
