import { Image, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: "20px",
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{
          uri: "https://picsum.photos/300/300",
        }}
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <Text
        style={{
          color: "tomato",
          fontSize: "34px",
        }}
      >
        Hello Elo
      </Text>
      <Aviso />
    </View>
  );
}

function Aviso() {
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text>Oi eu sou um aviso!</Text>
    </View>
  );
}
