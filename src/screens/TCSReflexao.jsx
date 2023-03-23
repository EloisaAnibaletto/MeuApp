import { Image, ScrollView, Text, View } from "react-native";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import styles from "../utils/styles";

export default function TCSReflexao() {
  return (
    <View style={styles.container}>
      <ScrollView
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
          Sites
        </Text>
        <View style={styles.sitesEmbeded}>
          <Text style={styles.textSites}>
            www.doar.org.br
            <a
              href="https://www.doar.org.br/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <PublicRoundedIcon />{" "}
            </a>
          </Text>

          <Text style={styles.textSites}>
            doacoes.gov.br
            <a
              href="https://doacoes.gov.br/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <PublicRoundedIcon />{" "}
            </a>
          </Text>

          <Text style={styles.textSites}>
            doacaodobem.com.br
            <a
              href="https://doacaodobem.com.br/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <PublicRoundedIcon />{" "}
            </a>
          </Text>

          <Text style={styles.textSites}>
            www.paraquemdoar.com.br
            <a
              href="https://www.paraquemdoar.com.br/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <PublicRoundedIcon />{" "}
            </a>
          </Text>

          <Image
            source={require("../../assets/doação.png")}
            style={{
              minWidth: "300px",
              height: "300px",
            }}
          />
          <Text style={{ color: "blue", textAlign: "right" }}>
            Ajude quem precisa!!!
          </Text>
        </View>
      </ScrollView>
      <Aviso />
    </View>
  );
}

// é um componente em React Native
function Aviso() {
  return <View style={{ backgroundColor: "yellow" }}></View>;
}
