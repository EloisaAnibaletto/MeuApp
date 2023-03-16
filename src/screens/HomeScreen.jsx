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
          source={require("../../assets/coracao.png")}
          style={{
            minWidth: "400px",
            height: "400px",
          }}
        />
      </View>
      <Text
        style={{
          color: "black",
          fontSize: "40px",
        }}
      >
        JOIN❤️ILLE DOA!
      </Text>
      <Aviso />
    </View>
  );
}

// é um componente em React Native
function Aviso() {
  return (
    <View style={{ backgroundColor: "grey" }}>
      <Text>Olá, seja muito bem vindo ao nosso canal de doações!</Text>
    </View>
  );
}