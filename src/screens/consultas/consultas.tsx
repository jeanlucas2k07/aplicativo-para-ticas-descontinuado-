import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';
import HeaderT from '../../components/header/headerSearch';
import { colors } from '@/constants/Colors';
import { Link, useRouter } from "expo-router";


export default function App() {
  const router = useRouter()
  function goClientes(){
    return(
      router.push('/screens/adicionarClientes/adicionarClientes')
    )
  }

  return (
    <View style={styles.container}>
      {/* Header fixo */}
      <HeaderT pagina="Consultas" searchBox={true}/>

      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>

      </ScrollView>

      {/* Botão flutuante */}
      <TouchableOpacity style={styles.floatingButton} onPress={goClientes}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollView: {
    flex: 1,
    marginTop: 60, // Para não ficar sob o header
  },
  content: {
    paddingBottom: 100, // Para não cobrir os últimos itens
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: colors.labelBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5, // Somente Android (efeito de sombra)
  },
  buttonText: {
    color: '#999999',
    fontSize: 30,
    fontWeight: 'bold',
  },

});
