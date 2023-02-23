import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({ navigation}) {
  return (
    <View styles={styles.container}>
      <Image
        source={{
          uri: "https://picsum.photos/300/300",
        }}
        style={styles.logo300}
      />
      <Text style={styles.textoEstiloso}>Hello Elo</Text>
      <Button 
        mode="outlined"
        onPress={()=>navigation.navigate("About")}>
        Ir para 
        </Button>
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
