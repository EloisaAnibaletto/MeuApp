import { Text, View } from "react-native";
import AboutScreen from "./src/screens/AboutScreen";
import ContactScreen from "./src/screens/ContactScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { styles } from "./src/utils/styles";
import RootNavigation from "./src";

export default function App() {
  return (
      <RootNavigation />
  )
}