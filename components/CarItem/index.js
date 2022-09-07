import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground 
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image} 
      />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $56,764</Text>
        </View>
        <StyledButton type="primary" />
      </View>
  );
};

export default CarItem;