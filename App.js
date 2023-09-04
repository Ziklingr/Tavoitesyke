import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = () => {
    if (age !== '') {
      const ageNumber = parseInt(age);
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
      setLowerLimit(lower.toString());
      setUpperLimit(upper.toString());
    } else {
      setLowerLimit('');
      setUpperLimit('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={(text) => {
          setAge(text);
          calculateHeartRateLimits();
        }}
        value={age}
      />
      <Text style={styles.result}>
        HR limits 
        {lowerLimit} - {upperLimit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
  },
  input: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  result: {
    
  },
});

export default HeartRateCalculator;
