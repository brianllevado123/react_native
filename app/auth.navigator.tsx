import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/login/login.screen';
import { HomeScreen } from './screens/home/home.screen';
import { RegisterScreen } from './screens/register/register.screen';


const { Navigator, Screen } = createNativeStackNavigator();

export const AuthNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Register" component={RegisterScreen}></Screen>
        <Screen name="Home" component={HomeScreen}></Screen>
    </Navigator>
)

