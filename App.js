import { Provider as PaperProvider } from "react-native-paper";
import RootNavigation from "./src";
import { useColorScheme } from "react-native";
import themes from "./src/utils/theme";

export default function App() {
  const prefersDarkMode = useColorScheme() === "dark";

  const themeDark = themes.dark;
  const themeLight = themes.light;

  const theme = prefersDarkMode ? themes.dark : themes.light;

  return (
    <PaperProvider theme={theme}>
      <RootNavigation />
    </PaperProvider>
  );
}
