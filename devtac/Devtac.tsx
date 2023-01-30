import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Devtac = () => {
  return (
    <View
      style={styles.container}>
      <Text>Devtac</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 20,
    backgroundColor: 'tomato',
    borderRadius: 20,
  }
});

export default About;