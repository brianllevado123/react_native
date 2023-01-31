import React from 'react';
import { Provider as PaperProvider, TextInput} from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';
import { theme} from './App.style';

const MyApp = () => {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen/>
    </PaperProvider>
  );
};


export default MyApp;
