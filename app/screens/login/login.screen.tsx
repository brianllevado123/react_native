import { Formik } from 'formik';
import React from 'react';
import { SafeAreaView, View, Alert,  Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginForm } from './login.form';
import { loginStyle } from './login.style';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {
    
  const forgot = () =>
  Alert.alert('Forgot email/password', 'No Forgot email/password functionality yet', [
    {
      text: 'Close',
      style: 'cancel',
    }
  ]);

const login = () => props.navigation.navigate('Home')

  const register = () => props.navigation.navigate('Register')

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.form}>
          <Card>
            <Card.Content>
            <Image 
                style={loginStyle.logo}
                source={require('./devtac-logo-home.png')}
              />
            </Card.Content>
          
            <Card.Content>
              <Formik
                initialValues={}
                onSubmit={login}
                validationSchema={loginForm}>
                  {({handleSubmit}) => (
                    <>
                      <TextInput label='Email' keyboardType='email-address' style={loginStyle.input} />
                      <TextInput label='Password' secureTextEntry={true} style={loginStyle.input} />
                      <Button 
                        style={loginStyle.cardButton}  
                        onPress={forgot}>
                          Forgot email/password
                      </Button>
                      <Button 
                        mode='contained' 
                        style={loginStyle.cardButton}
                        onPress={ handleSubmit }>
                          Login
                      </Button>
                      <Button 
                        style={loginStyle.cardButton}
                        onPress={register}>
                          Register
                      </Button>
                    </>
                  )}
              </Formik>
                        
                    
                   
            </Card.Content>
          </Card>
      </View>
    </SafeAreaView>
  );

}


  