import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/home/home.screen'; 
import { VoteScreen } from './screens/vote/vote.screen';


const { Navigator, Screen } = createDrawerNavigator();

export const HomeNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen name="Vote" component={VoteScreen}></Screen>
    </Navigator>
)

