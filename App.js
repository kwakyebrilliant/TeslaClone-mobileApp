import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={'Model x'} 
        tagline={'Starting from $79,635'}
        image={require('./assets/images/ModelX.jpeg')} 
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