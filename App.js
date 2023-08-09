import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem/CarItem";
import ButtonStyled from "./components/Button/ButtonStyled";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <CarItem></CarItem>
      <ButtonStyled type="primary"></ButtonStyled>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
    position: "absolute",
  },
});
