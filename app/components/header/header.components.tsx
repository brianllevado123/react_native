import React from 'react';
import { Appbar} from 'react-native-paper';

interface HeaderComponentParams {
    title: string;
    hasBackButton?: boolean;
    navigation?: any;
}

export const HeaderComponent = (props: HeaderComponentParams) => {

    const previousScreen = () => props.navigation?.goBack();
    const toggleMenu = () => props.navigation?.toggleDrawer();

    return (
        <Appbar elevated='true'> 
            {
                props.hasBackButton ?
                <Appbar.BackAction 
                    onPress={previousScreen} />
                : 
                <Appbar.Action 
                    icon="menu" onPress={toggleMenu} />
            }
    
            <Appbar.Content 
                title={props.title}></Appbar.Content>
        </Appbar>
    );
}


