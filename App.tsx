import React, {useState} from 'react';
import {Button, StyleSheet, Text, View,SafeAreaView} from 'react-native';

const MyApp = () => {

  const [name, setName] = useState('Click the button below:');
  let [click, setClick] = useState(0);
  const onClickHandler = () => {
    if (name == 'Click the button below:'){
      setName('Welcome to');
    } else {
      setName('Click the button below:');
    }
    setClick(click+1);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.customText}>{name}</Text>
        <Button
          onPress={onClickHandler}
          color="#206ab4"
          title="Devtac"
        />
        <Text style={styles.clickCounter}>{click}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63c2ea',
    borderWidth: 10,
    borderColor: '#206ab4',
    borderRadius: 20,
    margin: 40,
    
  },
  customText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  clickCounter: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default MyApp;
