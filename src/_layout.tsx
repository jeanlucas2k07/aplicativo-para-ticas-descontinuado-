import { Stack } from "expo-router";
import { FadeIn } from "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}> 
      <Stack.Screen name="index" />
      <Stack.Screen name="screens/cadastro/cadastro"/>
      <Stack.Screen name="screens/recuperarSenha/recuperarSenha"/>
      <Stack.Screen name="screens/cadastro/Sucesso"/>
      <Stack.Screen name="screens/home/homePage"/>
      <Stack.Screen name="screens/consultas/consultas"/>
      <Stack.Screen name='sreens/clientes'/>
      <Stack.Screen name='screens/adicionarClientes/adicionarClientes'/>
    </Stack>
  );
}
