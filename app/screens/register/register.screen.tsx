import React from 'react'; 
import { SafeAreaView, ScrollView, View} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { registerStyle } from './register.style';
import { HeaderComponent } from '../components/header/header.components';

interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const register = () => props.navigation.navigate("Home")

    return (
        <SafeAreaView style={ registerStyle.content}>
            <ScrollView>
                <HeaderComponent 
                    title='Register'
                    hasBackButton={true}
                    navigation={props.navigation}
                    />
                <View style={ registerStyle.form }>
                    <TextInput label='Name'  style={registerStyle.input} />
                    <TextInput label='Email' keyboardType='email-address' style={registerStyle.input} ></TextInput>
                    <TextInput label='Password' secureTextEntry={true}  style={registerStyle.input} right={<TextInput.Icon icon="eye-off-outline" />} />
                    <TextInput label='Confirm password' secureTextEntry={true}  style={registerStyle.input} right={<TextInput.Icon icon="eye-off-outline" />} />
                    <TextInput label='Phone Number' keyboardType='phone-pad'  style={registerStyle.input} />
                    <Button mode='contained' style={registerStyle.cardButton} onPress={register} >Register</Button>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    );
}