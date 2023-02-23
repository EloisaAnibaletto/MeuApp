import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function ContactScreen({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text> Oi sou a página de contato</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Home")}>
        Ir para Home
      </Button>
    </View>
  );
}
