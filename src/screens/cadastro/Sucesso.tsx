import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

interface Cliente {
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  data_visita: string;
  vendido: boolean;
}

const App = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // Simulando os dados no navegador
  const dadosSimulados: Cliente[] = [
    {
      nome: "João Silva",
      endereco: "Rua A, 123",
      bairro: "Centro",
      cidade: "São Paulo",
      cep: "01000-000",
      data_visita: "2025-02-14",
      vendido: true,
    },
    {
      nome: "Maria Oliveira",
      endereco: "Rua B, 456",
      bairro: "Jardins",
      cidade: "Rio de Janeiro",
      cep: "20000-000",
      data_visita: "2025-02-10",
      vendido: false,
    },
  ];

  // Simulando o carregamento dos dados
  useEffect(() => {
    setClientes(dadosSimulados);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cliente}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.endereco}, {item.bairro} - {item.cidade}</Text>
            <Text>Data da visita: {item.data_visita}</Text>
            <Text>Vendido: {item.vendido ? "Sim" : "Não"}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 15
  },
  cliente: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    width: "100%"
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
