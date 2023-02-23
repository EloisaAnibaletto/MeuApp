import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function AboutScreen({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text> Sou a página </Text>
      <Button mode="contained" onPress={() => navigation.navigate("Contact")}>
        Botao triste
      </Button>
    </View>
  );
}
