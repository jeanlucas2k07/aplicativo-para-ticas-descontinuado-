import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '@/constants/Colors'; // Supondo que você tenha esse arquivo de cores

const FilterButton = () => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterButton}>
        <AntDesign name="filter" size={25} color="#999999"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 120
  },
  filterButton: {
    width: 40,
    height: 40,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.labelBackground,
    borderRadius: 30,
    elevation: 5, // Somente Android (efeito de sombra)
  },

  filterText: {
    color: '#999999',
    fontSize: 16,
  },
});

export default FilterButton;
