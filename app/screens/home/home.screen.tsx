import React from 'react'; 
import { SafeAreaView, View, Text, Button} from 'react-native';
import { homeStyle } from './home.style';
import { HeaderComponent } from '../components/header/header.components';

interface HomeScreenProps {
    navigation: any;
}

export const HomeScreen = (props: HomeScreenProps) => {
    return (
        <SafeAreaView>
             <HeaderComponent 
                title='Home'
                hasBackButton={false}
                navigation={props.navigation}
                />
            <View >
                <Text>Homescreen</Text>
            </View>
        </SafeAreaView>
    );
}