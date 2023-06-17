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
  containerInner: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 10
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
    margin: "0px",
  },
  textoEstiloso: {
    color: "darkgrey",
    fontSize: "18px",
    textAlign: "justify",
    padding: "50px",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HelpIcons: {
    color: "blue",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    position: "fixed",
    bottom: "0",
    margin: "10px", 
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
  },
  sitesEmbeded: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "10px",
    alignItems: "center",
  },
  textoEstiloso: {
    textAlign: "center",
    margin: "10px",
  },
  textSites: {
    fontSize: "1rem",
    color: "blue",
  }
});

export default styles;
