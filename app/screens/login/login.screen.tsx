import React from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = () => {
    
    return (
      <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.form}>
            <Card>
                <Card.Title title='Devtac'></Card.Title>
                <Card.Content>
                    <TextInput label='Email' keyboardType='email-address' style={loginStyle.input}></TextInput>
                    <TextInput label='Password' secureTextEntry={true} style={loginStyle.input}></TextInput>
                    <Button style={loginStyle.cardButton}>Forgot email/password</Button>
                    <Button mode='contained' style={loginStyle.cardButton}>Login</Button>
                    <Button style={loginStyle.cardButton}>Register</Button>
                </Card.Content>
            </Card>
        </View>
      </SafeAreaView>
    );

}