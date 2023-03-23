import { Text, View } from "react-native";
import styles from "../utils/styles";

export default function SaibamaisScreen() {
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
          Saiba Mais
        </Text>
        <Text
          style={{
            color: "darkgrey",
            fontSize: "16px",
            textAlign: "justify",
            padding: "10px",
          }}
        >
          <Text style={{ display: "flex" }}>
            A necessidade de um canal direcionado a doações é clara, em busca
            orgânica pela palavra “doação” na data 14/12/2022 e o filtro
            direcionado para a região norte de Santa Catarina foram encontradas
            no site Olx 320 resultados, no Facebook o grupo Doando Joinville
            possui 26.895 membros ativos e outro grupo chamado “Doações
            Joinville e Região” possui 7300, estes dados reforçam de que há
            demanda para a população local, tanto para quem deseja doar, quanto
            para quem precisa receber.{" "}
          </Text>
          <Text style={{ display: "flex" }}>
            A ocorrência de doações sem um destino certo é fato comum na
            sociedade, com mais de 200 milhões de habitantes, o Brasil é um dos
            países que mais gera resíduos sólidos, onde por vezes, tais “resíduos”
            poderiam ser direcionadas a pessoas ou organizações que carecem e
            poderiam destinar-se a receber.{" "}
          </Text>
          <Text style={{ display: "flex" }}>
            Com a identificação das características do público e as evidências
            levantadas, é possível elaborar uma comunicação mais eficaz, capaz
            de dialogar entre doador e receptor a fim de promover um destino
            correto e benéfico entre as partes envolvidas.{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
}
