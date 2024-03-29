const themeDark = {
  colors: {
    primary: "rgb(192, 193, 255)",
    onPrimary: "rgb(17, 0, 169)",
    primaryContainer: "rgb(36, 25, 220)",
    onPrimaryContainer: "rgb(225, 224, 255)",
    secondary: "rgb(90, 213, 250)",
    onSecondary: "rgb(0, 53, 67)",
    secondaryContainer: "rgb(0, 78, 95)",
    onSecondaryContainer: "rgb(180, 235, 255)",
    tertiary: "rgb(255, 181, 159)",
    onTertiary: "rgb(95, 22, 0)",
    tertiaryContainer: "rgb(134, 34, 0)",
    onTertiaryContainer: "rgb(255, 219, 209)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(28, 27, 31)",
    onBackground: "rgb(229, 225, 230)",
    surface: "rgb(28, 27, 31)",
    onSurface: "rgb(229, 225, 230)",
    surfaceVariant: "rgb(71, 70, 79)",
    onSurfaceVariant: "rgb(200, 197, 208)",
    outline: "rgb(145, 143, 154)",
    outlineVariant: "rgb(71, 70, 79)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(229, 225, 230)",
    inverseOnSurface: "rgb(49, 48, 52)",
    inversePrimary: "rgb(66, 64, 242)",
    elevation: {
      level0: "transparent",
      level1: "rgb(36, 35, 42)",
      level2: "rgb(41, 40, 49)",
      level3: "rgb(46, 45, 56)",
      level4: "rgb(48, 47, 58)",
      level5: "rgb(51, 50, 62)",
    },
    surfaceDisabled: "rgba(229, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(229, 225, 230, 0.38)",
    backdrop: "rgba(48, 48, 56, 0.4)",
    custom: "rgb(161, 201, 255)",
    onCustom: "rgb(0, 50, 91)",
    customContainer: "rgb(0, 72, 128)",
    onCustomContainer: "rgb(211, 228, 255)",
  },
};

const themeLight = {
  colors: {
    primary: "rgb(66, 64, 242)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(225, 224, 255)",
    onPrimaryContainer: "rgb(7, 0, 108)",
    secondary: "rgb(0, 103, 126)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(180, 235, 255)",
    onSecondaryContainer: "rgb(0, 31, 40)",
    tertiary: "rgb(175, 48, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 219, 209)",
    onTertiaryContainer: "rgb(59, 10, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(28, 27, 31)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(28, 27, 31)",
    surfaceVariant: "rgb(228, 225, 236)",
    onSurfaceVariant: "rgb(71, 70, 79)",
    outline: "rgb(119, 118, 128)",
    outlineVariant: "rgb(200, 197, 208)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(49, 48, 52)",
    inverseOnSurface: "rgb(243, 239, 244)",
    inversePrimary: "rgb(192, 193, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(246, 242, 254)",
      level2: "rgb(240, 236, 254)",
      level3: "rgb(234, 230, 254)",
      level4: "rgb(232, 229, 253)",
      level5: "rgb(229, 225, 253)",
    },
    surfaceDisabled: "rgba(28, 27, 31, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 31, 0.38)",
    backdrop: "rgba(48, 48, 56, 0.4)",
    custom: "rgb(17, 96, 164)",
    onCustom: "rgb(255, 255, 255)",
    customContainer: "rgb(211, 228, 255)",
    onCustomContainer: "rgb(0, 28, 56)",
  },
};

const themes = {
  light: themeLight,
  dark: themeDark,
};

export default themes;
