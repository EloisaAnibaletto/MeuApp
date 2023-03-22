import { Text, View } from "react-native";
import { SocialIcon } from "react-social-icons";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import styles from "../utils/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre em contato</Text>
      <Text style={styles.textoEstiloso}>
        Nosso grupo é formado por 5 pessoas, que são elas: <br />
        <br />
        <b>Patricia</b> - Gerente de projetos <br />
        <b>Milena</b> - Product Manager <br />
        <b>Eloisa</b> - Desenvolvedora Full Stack <br />
        <b>Refeson</b> - DBA <br />
        <b>Kanamy Stewart</b> - Eng de Software <br />
        <br />
        Estamos desenvolvendo esse aplicativo para nosso TSC, para aplicarmos
        todos os conhecimentos adquiridos durante o curso. Nossa formatura é no
        dia 04 de agosto de 2023. Gostária de saber mais sobre todo o nosso TSC,
        clicque no icone abaixo e veja ele completo.
      </Text>
      <a href="https://docs.google.com/document/d/1oxqESeQ1s7XORpm9hpDJ3cxWG5kROmuZGy-kpzLS27U/edit?usp=sharing">
        <DocumentScannerOutlinedIcon />
      </a>

      <div style={styles.socialIcons}>
        <SocialIcon
          network="linkedin"
          bgColor="#FF6347"
          url="https://linkedin.com"
        />
        <SocialIcon
          network="twitter"
          bgColor="#FF6347"
          url="https://twitter.com/"
        />
        <SocialIcon
          network="facebook"
          bgColor="#FF6347"
          url="https://pt-br.facebook.com/"
        />
        <SocialIcon
          network="youtube"
          bgColor="#FF6347"
          url="https://www.youtube.com/"
        />
        <SocialIcon
          network="instagram"
          bgColor="#FF6347"
          url="https://instagram.com"
        />
      </div>
    </View>
  );
}
