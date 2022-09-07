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
        <View style={styles.buttonsConatiner}>
        <StyledButton 
          type="primary" 
          content={'Custom Order'} 
          onPress={() => {
            console.warn('Custom Order was pressed');
          }} />
          <StyledButton 
          type="secondary" 
          content={'Existing Investory'} 
          onPress={() => {
            console.warn('Existing Investory was pressed');
          }} />
        </View>
      </View>
  );
};

export default CarItem;