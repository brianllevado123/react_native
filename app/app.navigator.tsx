import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';

const AppNavigator = () => (
    <NavigationContainer>
        <AuthNavigator />
        {/* <HomeNavigator /> */}
    </NavigationContainer>
)

export default AppNavigator;