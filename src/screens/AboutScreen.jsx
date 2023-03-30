import { Text, View } from "react-native";
import styles from "../utils/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexBasis: "80%",
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: "38px",
            textAlign: "center",
          }}
        >
          Sobre nós
        </Text>
        <Text
          style={{
            color: "darkgrey",
            fontSize: "14px",
            textAlign: "justify",
            padding: "50px",
          }}
        >
          <Text style={{ display: "flex" }}>
            Somos uma plataforma que facilita o compartilhamento de doações! ❤️
          </Text>
          <Text style={{ display: "flex" }}>
            Buscamos estimular o desejo de fazer o bem de forma contínua, não
            isolada, utilizando da tecnologia como meio propagador.👩‍💻
          </Text>
          <Text style={{ display: "flex" }}>
            Queremos resgatar o hábito de dar aquela xícara de açúcar quando
            alguém bate na nossa porta. ☕
          </Text>
          <Text style={{ display: "flex" }}>
            E nós damos uma mãozinha pra que seja possível abrir várias portas
            em questão de minutos 😉
          </Text>
          <Text style={{ display: "flex" }}>
            Doar suas coisas é uma ótima maneira de dar ressignificado, agir de
            forma sustentável e ajudar o amiguinho que precisa #ficaadica 🤗
          </Text>
          <Text style={{ display: "flex" }}>
            Ah! E a ajuda é incondicional, você não tem que dar nada em troca e
            nem pagar por isso, tipo aquele ditado: gentileza gera gentileza 🤝
          </Text>
        </Text>
      </View>
    </View>
  );
}