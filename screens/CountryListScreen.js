import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native';
import CountryCard from '../components/CountryCard';
import { fetchCountries } from '../services/api';

const CountryListScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  const renderItem = ({ item }) => (
    <CountryCard 
      country={item} 
      onSelect={() => navigation.navigate('CountryDetail', { country: item })} 
    />
  );

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un pays ou une région..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredCountries}
        renderItem={renderItem}
        keyExtractor={(item) => item.cca3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8', // Couleur de fond plus claire
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
});

export default CountryListScreen;
