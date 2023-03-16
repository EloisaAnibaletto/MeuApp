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
            fontSize: "34px",
            textAlign: "center",
          }}
        >
          Sobre nós
        </Text>
        <Text
          style={{
            color: "darkgrey",
            fontSize: "16px",
            textAlign: "center",
            padding: "50px",
          }}
        >
          <Text style={{ display: "flex" }}>
            Somos uma plataforma que facilita o compartilhamento de coisas entre
            vizinhos!{" "}
          </Text>
          Buscamos estimular o desejo de fazer o bem de forma contínua, não
          isolada, utilizando da tecnologia como meio propagador.
          <Text>
            Queremos resgatar o hábito de dar aquela xícara de açúcar quando
            alguém bate na nossa porta.
          </Text>
          <Text>
            E nós damos uma mãozinha pra que seja possível abrir várias portas
            em questão de minutos 😉
          </Text>
          <Text>
            Doar suas coisas é uma ótima maneira de dar ressignificado, agir de
            forma sustentável e quebrar o gelo na hora de conhecer os vizinhos
            #ficaadica
          </Text>
          <Text>
            Ah! E a ajuda é incondicional, você não tem que dar nada em troca e
            nem pagar por isso, tipo aquele ditado: gentileza gera gentileza.
          </Text>
        </Text>
      </View>
    </View>
  );
}
