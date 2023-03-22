/*import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
  },
  logo300: {
    width: "300px",
    height: "300px",
  },
  textoEstiloso: {
    color: "tomato",
    fontSize: "34px",
  },
});*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    position: "fixed",
    top: "0",
    margin: "10px",
  },
  logo300: {
    width: "300px",
    height: "300px",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    position: "fixed",
    bottom: "0",
    margin: "10px",
  },
  textoEstiloso: {
    textAlign: "center",
    margin: "10px",
  },
});

export default styles;
