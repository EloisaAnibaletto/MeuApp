import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";

export default function RegisterScreen(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    return(
        <View
            style={styles.container}
        >
            <Paragraph>Faça o seu Registro</Paragraph>
                <View>
                    <Paragraph>Email</Paragraph>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Paragraph>Senha</Paragraph>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite seu senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Paragraph>Confirme sua Senha</Paragraph>
                    <TextInput
                        mode="outlined"
                        placeholder="Confirme seu senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={true}
                    />
                </View>
        </View>
    )
}