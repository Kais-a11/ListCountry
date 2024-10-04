import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryListScreen from '../screens/CountryListScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CountryList">
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="CountryDetail" component={CountryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;