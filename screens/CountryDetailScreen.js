import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CountryDetailScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: country.flags.svg }} style={styles.flag} />
      <Text style={styles.title}>{country.name.common}</Text>
      <Text style={styles.info}>Population: {country.population.toLocaleString()}</Text>
      <Text style={styles.info}>Region: {country.region}</Text>
      <Text style={styles.info}>Subregion: {country.subregion}</Text>
      <Text style={styles.info}>Capital: {country.capital}</Text>
      <Text style={styles.info}>Languages: {Object.values(country.languages || {}).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff', // Couleur de fond blanche pour la page de détail
  },
  flag: {
    width: 100,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333', // Couleur pour les informations
  },
});

export default CountryDetailScreen;
