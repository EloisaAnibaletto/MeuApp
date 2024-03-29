import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SignOut from "./screens/SignOut";
import SaibamaisScreen from "./screens/Saibamais";
import { SplashScreen } from "./screens/SplashScreen";

import TaskAdd from "./screens/TaskAdd";
import TaskList from "./screens/TaskList";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Registre-se",
            // headerShown: false,
          }}
          />
        <Stack.Screen
          name="MTBNavigation"
          component={MBTNavigation}
          options={{
            title: "Nav pricipal",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MTB = createMaterialBottomTabNavigator();

export function MBTNavigation() {
  return (
    <MTB.Navigator>
      <MTB.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: "home",

          title: "Inicio",
        }}
      />
      <MTB.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: "Sobre",
          tabBarIcon: "help",
        }}
      />
      <MTB.Screen
        name="SaibamaisScreen"
        component={SaibamaisScreen}
        options={{
          title: "Saiba Mais",
          tabBarIcon: "book-open-page-variant",
        }}
      />
      <MTB.Screen
        name="TaskAdd"
        component={TaskAdd}
        options={{
          title: "Adicionar Doação",
          tabBarIcon: "plus",
        }}
      />
      <MTB.Screen
        name="TasksList"
        component={TaskList}
        options={{
          title: "Lista Doações",
          tabBarIcon: "format-list-bulleted",
        }}
      />
      <MTB.Screen
        name="LogoutScreen"
        component={SignOut}
        options={{
          title: "Sair",
          tabBarIcon: "arrow-right-circle",
        }}
      />
    </MTB.Navigator>
  );
}