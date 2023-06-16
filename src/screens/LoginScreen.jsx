import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, HelperText, Paragraph, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native-web";
import { auth } from "../config/firebase";

import styles from "../utils/styles";
import Logo from "../components/Logo";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [error, setError] = useState("");

  function handleRegister() {
    console.log("Login usuário");

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log(userCredential, "Usuário registrado com sucesso");
        navigation.navigate("MTBNavigation");
      })
      .catch((error) => {
        setError(error.message); // mostra a mensagem original do Firebase
        const errorCode = error.code; // obtém o código de erro do Firebase
        switch (
          errorCode // verifica qual é o código de erro
        ) {
          case "auth/email-already-in-use":
            setError("Esse email já está em uso por outro usuário."); // mostra uma mensagem humanizada
            break;
          case "auth/invalid-email":
            setError("Esse email não é válido.");
            break;
          case "auth/weak-password":
            setError("Essa senha é muito fraca.");
            break;
          default:
            setError("Ocorreu um erro ao acessar com este e-mail e senha.");
        }
      });
  }

  return (
    <View style={{ ...styles.container, alignSelf: "stretch" }}>
      <Logo />
      <Paragraph>Faça o seu Login</Paragraph>
      <HelperText type="error"> {error} </HelperText>
      <View style={{ alignSelf: "stretch" }}>
        <Paragraph>E-mail</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={{ alignSelf: "stretch" }}>
        <Paragraph>Senha</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Digite sua Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={passwordVisible}
          right={() => (
            <Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignSelf: "stretch",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Button mode="contained" onPress={handleRegister}>
          Acessar
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}
