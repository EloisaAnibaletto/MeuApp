import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function ContactScreen(){
    return(
        <View>
            <Text> Oi sou a página de contato</Text>
            <Button 
            mode="contained"
            onPress={()=>navigation.navigate("Home")}
            >Ir para Home</Button>
        </View>
    )
}