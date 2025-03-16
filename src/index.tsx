import { Text, View, TextInput, Image, StyleSheet, Pressable, KeyboardAvoidingView, ScrollView, Platform} from "react-native";
import { colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function LoginPage() {

  const [showPass, setShowPass] = useState(true)
  const route = useRouter()

  function goHome(){
    return(
      route.push("/screens/home/homePage")
    )
  }

  function onEyePress() {
    if (showPass === true){
      setShowPass(false);
    } else if (showPass === false){
      setShowPass(true);
    }
  }

  return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário..."
              inputMode="text"
              keyboardType="default"
              inlineImageLeft="@/assets/images/logo.png"
            />

          <View>
            <View style={styles.inputWrapper}>
              <TextInput 
                placeholder="Senha..."
                inputMode="text"
                keyboardType="default"
                secureTextEntry={showPass}
              />
              <Ionicons
                onPress={onEyePress}
                name={showPass ? "eye-off" : "eye"}
                color={'#868686'}
                size={24}
                style={styles.eyeIcon}
              />
            </View>

            <Text style={{color:'#868686', marginTop: -10, marginBottom:50}}>
            Esqueceu a senha? <Link href={"/screens/recuperarSenha/recuperarSenha"}><Text style={{color:colors.btnBlue}}>Clique aqui</Text></Link> para redefini-la
            </Text>
          </View>

          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button1} onPress={goHome}>
              <Text style={styles.textButton}>Entrar</Text>
            </Pressable>

            <Link href={'/screens/cadastro/cadastro'} asChild>
              <Pressable style={styles.button2}>
                <Text style={{ color: '#868686', fontSize: 16 }}>Cadastre-se</Text>
              </Pressable>
            </Link>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 45,
    alignSelf: 'center',
    marginTop: 50
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderColor: '#868686',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 55,
    borderWidth: 0.2,
    marginBottom: 20,
    elevation: 2,
    paddingHorizontal: 15,
    flex: 1
  },

  inputContainer: {
    width: '100%',
  },

  buttonContainer: {
    width: '100%',
  },

  button1: {
    height: 50,
    backgroundColor: colors.btnBlue,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50,
  },

  button2: {
    height: 50,
    backgroundColor: colors.btnGray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  textButton: {
    color: '#fff',
    fontSize: 16,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#868686',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 55,
    borderWidth: 0.2,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  
  eyeIcon: {
    position: 'absolute',
    right: 15,
  }
  
});