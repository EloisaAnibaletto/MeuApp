import { ScrollView, Text, View } from "react-native";
import styles from "../utils/styles";
import { SocialIcon } from "react-social-icons";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
              🎉💌 Plataforma Joinville Doa: Conectando 💝 doadores e 🤲
              receptores para uma experiência de doação simples e otimizada!
              🎉🌟
            </Text>
            <Text style={{ display: "flex" }}>
              📢 Ei, você aí! Sabe qual é a última moda em Joinville? É a
              Plataforma Joinville Doa, uma revolução no mundo da doação! 🌍✨
            </Text>
            <Text style={{ display: "flex" }}>
              🤝 Você já teve aquele sentimento de querer ajudar alguém, mas não
              sabia como fazer isso de forma eficiente? 😕 Bem, seus problemas
              acabaram! Com a Plataforma Joinville Doa, é fácil como um passe de
              mágica!
            </Text>
            <Text style={{ display: "flex" }}>
              🤩 E o melhor de tudo é que essa plataforma incrível é super fácil
              de usar! É só se cadastrar, criar um perfil e pronto! Você estará
              pronto para fazer a diferença na vida de alguém! 🌈🙌
            </Text>
            <Text style={{ display: "flex" }}>
              💼👥 Com uma interface amigável e intuitiva, a Plataforma
              Joinville Doa permite que você encontre o doador perfeito para sua
              necessidade específica. Seja alimentos, roupas, brinquedos ou
              qualquer outro item, você encontrará alguém generoso disposto a
              ajudar. 💪🎁
            </Text>
            <Text style={{ display: "flex" }}>
              💡💭 Imagine só: você está procurando alguém que possa doar aquele
              livro incrível que você sempre quis ler. Com um simples clique,
              você encontra uma pessoa generosa disposta a compartilhar a
              alegria da leitura. É como mágica! 📚✨
            </Text>
            <Text style={{ display: "flex" }}>
              🎉🌈 A Plataforma Joinville Doa transformou a doação em uma
              jornada divertida e emocionante. Afinal, não há nada mais
              gratificante do que ajudar alguém e receber um sorriso sincero em
              troca! 😊🌟
            </Text>
            <Text style={{ display: "flex" }}>
              🌟✨ Então, junte-se a nós na Plataforma Joinville Doa e faça
              parte dessa rede incrível de solidariedade! Juntos, podemos tornar
              o mundo um lugar melhor, um emoji de ❤️ de cada vez! 🌍💖
            </Text>
            <Text style={{ display: "flex" }}>
              🙌💪 Não espere mais! Cadastre-se agora mesmo na Plataforma
              Joinville Doa e comece a espalhar o amor e a generosidade! 🌟🎁😄
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 100,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View>
                  <SocialIcon
                    style={{
                      margin: 5,
                    }}
                    network="instagram"
                    bgColor="rgb(17, 0, 169)"
                    url="https://instagram.com"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      margin: 5,
                    }}
                  >
                    @joinvilledoa
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View>
                <SocialIcon 
                style={{
                      margin: 5,
                    }}
                network="facebook"
                bgColor="rgb(17, 0, 169)"
                url="https://pt-br.facebook.com/"
              />
                </View>
                <View>
                  <Text
                    style={{
                      margin: 5,
                    }}
                  >
                    Joinville Doa
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View>
                <SocialIcon
                  style={{
                    margin: 5,
                  }}
                  network="twitter"
                  bgColor="rgb(17, 0, 169)"
                  url="https://twitter.com/"
                />
                </View>
                <View>
                  <Text
                    style={{
                      margin: 5,
                    }}
                  >
                    @joinvilledoa
                  </Text>
                </View>
              </View>
            </View>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
