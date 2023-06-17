import { Image } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/inicio1.png")}
      style={{
        width: 250,
        height: 250,
      }}
      resizeMode="contain"
    />
  );
}
