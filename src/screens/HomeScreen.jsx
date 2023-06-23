import { Image, Text, View } from "react-native";
import styles from "../utils/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexBasis: "60%",
        }}
      >
        <Image
      source={require("../../assets/inicio1.png")}
      style={{
        marginTop: 80,
        width: 250,
        height: 250,
      }}
      resizeMode="contain"
    />
        
      </View>
      <Text
        style={{
          color: "black",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Olá, seja bem vindo ao canal mais completo de doações de Joinville!
      </Text>
    </View>
  );
}

function Aviso() {
  return (
    <View style={{ backgroundColor: "grey" }}>
      <Text>Olá, seja muito bem vindo ao nosso canal de doações!</Text>
    </View>
  );
}