import { bindActionCreators } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { SafeAreaView, View,  Image } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';
import { connect } from "react-redux";
import { AppState } from '../../store/AppState';
import { hide, show } from '../../store/loading/loading.actions';
import { LoadingState } from '../../store/loading/LoadingState';
import { login } from '../../store/login/login.actions';
import { LoginState } from '../../store/login/LoginState';
import { loginForm } from './login.form';
import { loginStyle } from './login.style';


interface LoginScreenProps {
  navigation: any;
  loadingState: LoadingState;
  loginState: LoginState;
  login: Function;
  hideLoading: Function;
  showLoading: Function;
}

export const LoginScreen = (props: LoginScreenProps) => {

  // useEffect(() => {
   
  //     props.showLoading();
    
  // });
  console.log(props);
  const login = () => { props.showLoading() }
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
                initialValues={{email: "", password: ""}}
                onSubmit={login}
                validationSchema={loginForm}>
                  {({handleSubmit, handleChange, errors, setFieldTouched, touched}) => (
                    <>
                     
                      <TextInput 
                        label='Email' 
                        keyboardType='email-address' 
                        style={loginStyle.input} 
                        onChangeText={handleChange('email')}
                        onFocus={() => setFieldTouched('email')}/>
                        {
                          touched.email && errors.email?
                          <Text style={{ color: "#FF0000" }}>{errors.email}</Text>
                          :null
                        }
                      <TextInput 
                        label='Password' 
                        secureTextEntry={true} 
                        style={loginStyle.input} 
                        onChangeText={handleChange('password')}
                        onFocus={() => setFieldTouched('password')}/>
                        {
                          touched.password && errors.password ?
                          <Text style={{ color: "#FF0000" }}>{errors.password}</Text>
                          :null
                        }
                      <Button 
                        mode='contained' 
                        style={loginStyle.loginBtn}
                        onPress={ handleSubmit }>
                          Login
                      </Button>
                      <Button 
                        style={loginStyle.registerBtn}
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

const mapStateToProps = (store: AppState) => ({
  loadingState: store.loading,
  loginState: store.login
})
const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    login: login,
    hideLoading: hide,
    showLoading: show
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
  