import React from 'react'; 
import { SafeAreaView, View, Text} from 'react-native';
import { voteStyle } from './vote.style';
import { HeaderComponent } from '../components/header/header.components';

interface VoteScreenProps {
    navigation: any;
}

export const VoteScreen = (props: VoteScreenProps) => {
    return (
        <SafeAreaView>
            <HeaderComponent 
                title='Vote'
                hasBackButton={false}
                navigation={props.navigation}
                />
            <View >
                <Text>Vote</Text>
            </View>
        </SafeAreaView>
    );
}