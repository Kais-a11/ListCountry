import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CountryCard = ({ country, onSelect }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onSelect}>
      <Image source={{ uri: country.flags.svg }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>
      <Text style={styles.info}>Population: {country.population.toLocaleString()}</Text>
      <Text style={styles.info}>Region: {country.region}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000', // Ombre pour iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Élévation pour Android
  },
  flag: {
    width: 60,
    height: 40,
    marginBottom: 12,
    borderRadius: 8, // Bordure arrondie pour le drapeau
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Couleur plus foncée pour un meilleur contraste
  },
  info: {
    fontSize: 14,
    color: '#555', // Couleur grise pour les informations supplémentaires
    marginVertical: 2,
  },
});

export default CountryCard;
