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
    fontSize: 34,
    position: "fixed",
    top: "0",
    margin: "10px",
    color: "red",
  },
  logo300: {
    width: "300px",
    height: "300px",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    position: "absolute",
    bottom: "0",
    margin: "10px",
  },
  textoEstiloso: {
    color: "darkgrey",
    fontSize: "16px",
    textAlign: "center",
    padding: "50px",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
