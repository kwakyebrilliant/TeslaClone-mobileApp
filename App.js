import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={'Model 3'} 
        tagline={'Order online for'}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/Model3.jpeg')} 
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});